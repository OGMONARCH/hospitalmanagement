import User from '../model/UserSchema.js';
import Doctor from '../model/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
        expiresIn: '15h', // Set token expiration as needed
    });
};

export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body;

    try {
        let user = null;

        if (role === 'patient') {
            user = await User.findOne({ email });
        } else if (role === 'doctor') {
            user = await Doctor.findOne({ email });
        }

        // Check if user exists
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        if (role === 'patient') {
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                role,
                gender
            });
        } else if (role === 'doctor') {
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                photo,
                role,
                gender
            });
        }

        await user.save();

        const token = generateToken(user);

        res
        .status(200)
        .json({ success: true, message: 'User successfully created', token });
    } catch (err) {
        res
        .status(500)
        .json({ success: false, message: 'Internal server error, Try again' });
    }
};

export const login = async (req, res) => {
    const { email } = req.body;

    try {
        let user = null;

        const patient = await User.findOne({ email });
        const doctor = await Doctor.findOne({ email });

        if (patient) {
            user = patient;
        }
        if (doctor) {
            user = doctor;
        }

        // Check if user exists or not
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare password
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);

        if (!isPasswordMatch) {
            return res
            .status(400)
            .json({ message: 'Invalid credentials' });
        }

        // Generate token
        const token = generateToken(user);

        const {password, role, apppointments, ... rest} = user._doc

        res.status(200).json({ success: true, message: 'Login successful', token, data:{ ... rest }, role });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Internal server error, Try again' });
    }
};

