import Doctor from "../model/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const updateDoctor = await Doctor.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: 'Successfully updated',
            data: updateDoctor,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update' });
    }
};

export const deleteDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        await Doctor.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: 'Successfully deleted',
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete' });
    }
};

export const getSingleDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await Doctor.findById(id).select('-password');

        res.status(200).json({
            success: true,
            message: 'User found',
            data: user,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: 'No user found' });
    }
};

export const getAllDoctor = async (req, res) => {
    try {
        const users = await Doctor.find({}).select('-password');

        res.status(200).json({
            success: true,
            message: 'Users found',
            data: doctor,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: 'Not found' });
    }
};
