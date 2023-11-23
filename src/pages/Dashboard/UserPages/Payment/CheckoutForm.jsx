import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../../../hooks/useCart";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";


const CheckoutForm = () => {

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth();

    const {data: cart = [], refetch} = useCart();

    const totalPrice = cart?.reduce((total, item) => total + item.price, 0)

    useEffect(() =>{
        if(totalPrice){
            console.log('total price', totalPrice);
            axiosSecure.post('/create-payment-intent', {price : totalPrice})
            .then(res => {
                console.log(res.data);
                setClientSecret(res.data?.clientSecret)
            })
        }
    },[axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        }
        else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        if(clientSecret == ''){
            return ;
        }

        const {paymentIntent, error : confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card : card,
                billing_details : {
                    email : user?.email || 'anonymous',
                    name : user?.displayName || 'anonymous',
                }
            }
        })

        if(confirmError){
            console.log('confirm error');
        }
        else{
            console.log('payment intent', paymentIntent);
        }
        if(paymentIntent.status === 'succeeded'){
            console.log('transaction id', paymentIntent.id);
            setTransactionId(paymentIntent.id)
            const payment = {
                email : user?.email,
                price : totalPrice,
                transactionId : paymentIntent.id,
                date : new Date(),
                cartIds : cart?.map(item => item._id),
                menuIds : cart?.map(item => item.menuId),
                status : 'pending'
            }

            const res = await axiosSecure.post('/payments', payment)
            console.log(res.data);
            refetch()

            if(res.data?.paymentResult?.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Payment done successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-primary mt-4" type="submit" disabled={!stripe}>
                Pay
            </button>
            <p>{error}</p>
            <p>{`Transaction Id : ${transactionId}`}</p>
        </form>
    );
};

export default CheckoutForm;