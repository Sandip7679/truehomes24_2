// import Razorpay from 'razorpay';
import React, { useEffect, useState } from 'react';

const PaymentGateway = ({closeGateway}) => {

    const [paymentId, setPaymentId] = useState('');

    useEffect(() => {
        // openPayModal();
        // var pay = new window.rozorpay(options);
        // pay.open();
    }, []);

    // const openPayModal = () => {
    //     const rzp = new Razorpay(options);
    //     rzp.open();
    //   };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            const options = {
                key: 'rzp_test_YoJ0a1xySRHBf7',// Replace this with your actual Razorpay key
                key_secret: '9jRq5GsulKHvNOTgAT69T5AH',
                amount: 100, // Amount in paise (e.g., 10000 paise = ₹100)
                currency: 'INR',
                name: 'Your Company Name',
                description: 'Test Transaction',
                // image: 'https://your-company-logo.png',
                handler: function (response) {
                    if (response.error) {
                        alert('Payment failed: ' + response.error.description);
                    } else {
                        alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
                        setPaymentId(response.razorpay_payment_id);
                    }
                },
                modal: {
                    ondismiss: function () {
                        // alert('Payment cancelled by user');
                         closeGateway();
                        // Close the payment gateway here if needed
                    }
                },
                prefill: {
                    name: 'John Doe',
                    email: 'john@example.com',
                    contact: '9999999999'
                },
                notes: {
                    address: 'Razorpay Corporate Office'
                },
                theme: {
                    color: '#F37254'
                }
            };
            const rzp = new window.Razorpay(options);
            rzp.open();
        };

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    // const options = {
    //     key: 'rzp_test_YoJ0a1xySRHBf7',// Replace this with your actual Razorpay key
    //     key_secret:'9jRq5GsulKHvNOTgAT69T5AH', 
    //     amount: 100, // Amount in paise (e.g., 10000 paise = ₹100)
    //     currency: 'INR',
    //     name: 'Your Company Name',
    //     description: 'Test Transaction',
    //     // image: 'https://your-company-logo.png',
    //     handler: function (response) {
    //         alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
    //         setPaymentId(response.razorpay_payment_id);
    //     },
    //     prefill: {
    //         name: 'John Doe',
    //         email: 'john@example.com',
    //         contact: '9999999999'
    //     },
    //     notes: {
    //         address: 'Razorpay Corporate Office'
    //     },
    //     theme: {
    //         color: '#F37254'
    //     }
    // };

    return (
        <div>

        </div>
    );
}

export default PaymentGateway;
