// auth.js

const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

export const handleLogin = (username, password) => {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        localStorage.setItem('loggedInUser', JSON.stringify(ADMIN_CREDENTIALS));
        return { success: true, role: 'admin' };
    }

    const customerProfile = JSON.parse(localStorage.getItem('customerProfile'));
    if (customerProfile && customerProfile.username === username && customerProfile.password === password) {
        localStorage.setItem('loggedInUser', JSON.stringify(customerProfile));
        return { success: true, role: 'customer' };
    }

    return { success: false, message: 'Invalid credentials' };
};

export const handleSignup = (username, password, email) => {
    const newProfile = {
        username,
        password,
        email,
        name: 'John Doe',
        phoneNumber: '9876543210',
        address: '1234 Elm Street',
        state: 'California',
        zipCode: '90001',
    };
    localStorage.setItem('customerProfile', JSON.stringify(newProfile));
};
