// mui imports
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

// react hook form
import { Controller, useForm } from "react-hook-form";

export default function Register() {
    const [submissions, setSubmissions] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false); // NEW state

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fullName: "",
            age: "",
            gender: "",
            occupation: "",
            location: "",
        },
    });

    const onSubmit = (data) => {
        setSubmissions((prev) => [...prev, data]);
        reset();
        setIsSubmitted(true); // Show success message
    };

    return (
        <>
            <div className=''>
                <h1 className="text-5xl font-extrabold text-center text-pink-800 mb-10">💍 Matrimony Application</h1>

                <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-2xl mx-auto mb-20">
                    {!isSubmitted ? (
                        <>
                            <h2 className="text-3xl font-semibold text-pink-700 mb-6 text-center">Register Your Profile</h2>

                            <Grid>
                                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

                                    {/* Full Name */}
                                    <Controller
                                        name="fullName"
                                        control={control}
                                        rules={{ required: "Full Name is required" }}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                placeholder="Full Name"
                                                error={!!errors.fullName}
                                                helperText={errors.fullName?.message}
                                            />
                                        )}
                                    />

                                    {/* Age */}
                                    <Controller
                                        name="age"
                                        control={control}
                                        rules={{
                                            required: "Age is required",
                                            min: { value: 18, message: "You must be at least 18" },
                                        }}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                type="number"
                                                placeholder="Age"
                                                error={!!errors.age}
                                                helperText={errors.age?.message}
                                            />
                                        )}
                                    />

                                    {/* Gender */}
                                    <Controller
                                        name="gender"
                                        control={control}
                                        rules={{ required: "Gender is required" }}
                                        render={({ field }) => (
                                            <FormControl fullWidth error={!!errors.gender}>
                                                <InputLabel>Gender</InputLabel>
                                                <Select
                                                    {...field}
                                                    label="Gender"
                                                >
                                                    <MenuItem value="male">Male</MenuItem>
                                                    <MenuItem value="female">Female</MenuItem>
                                                    <MenuItem value="other">Other</MenuItem>
                                                </Select>
                                                <FormHelperText>{errors.gender?.message}</FormHelperText>
                                            </FormControl>
                                        )}
                                    />


                                    {/* Occupation */}
                                    <Controller
                                        name="occupation"
                                        control={control}
                                        rules={{ required: "Occupation is required" }}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                placeholder="Occupation"
                                                error={!!errors.occupation}
                                                helperText={errors.occupation?.message}
                                            />
                                        )}
                                    />

                                    {/* Location */}
                                    <Controller
                                        name="location"
                                        control={control}
                                        rules={{ required: "Location is required" }}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                placeholder="Location"
                                                error={!!errors.location}
                                                helperText={errors.location?.message}
                                            />
                                        )}
                                    />

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#db2777',
                                            '&:hover': { backgroundColor: '#be185d' },
                                            paddingY: 2,
                                            fontSize: '1rem',
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </form>
                            </Grid>
                        </>
                    ) : (
                        <div className="text-center text-green-700 text-2xl font-semibold">
                            🎉 Registration successful!
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
