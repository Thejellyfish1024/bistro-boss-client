import { useQuery } from "@tanstack/react-query";
import Heading from "../../../../components/Heading";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const PaymentHistory = () => {

    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const {data: payments} = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data;
        }
    })


    return (
        <div>
            <Heading header={'PAYMENT HISTORY'} subHeader={'At a Glance!'}></Heading>
            <div className="p-10">
                <div className="bg-base-300 rounded-md p-10 ">
                    <h2 className="text-3xl font-bold mb-8">Total Payments: {payments?.length}</h2>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead className="bg-[#D1A054] text-white">
                                    <tr>
                                        <th>Email</th>
                                        <th>CATEGORY</th>
                                        <th>Total PRICE</th>
                                        <th>PAYMENT DATE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        payments?.map((payment, index) => <tr key={payment._id}>
                                            <th>
                                                <p>{index + 1}</p>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    Food Order
                                                </div>
                                            </td>
                                            <td>${payment?.price}</td>
                                            <td>
                                                <p>{payment?.date}</p>
                                            </td>
                                          
                                        </tr>)
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;