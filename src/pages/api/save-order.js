import { db } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, firstName, lastName, phone, amount, paymentId } = req.body;

        try {
            const docRef = await addDoc(collection(db, 'orders'), {
                email,
                firstName,
                lastName,
                phone,
                amount,
                paymentId,
                status: 'confirmed',
                createdAt: new Date(),
            });

            res.status(200).json({ message: 'Order saved successfully', orderId: docRef.id });
        } catch (error) {
            res.status(500).json({ message: 'Error saving order', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}