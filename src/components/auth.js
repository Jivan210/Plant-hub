const ADMIN_CREDENTIALS = {
    email: 'admin@example.com',
    password: 'admin123'
};

const CUSTOMER_CREDENTIALS = [
    {
        name: 'Jivan Pal',
        email: 'jivan.pal@gmail.com',
        password: 'Jivan@12345#',
        phoneNumber: '87623456678',
        address: 'Patia, BBSR',
        state: 'Odisha',
        zipCode: '751024'
    },
    {
        name: 'Amrita',
        email: 'amrita@gmail.com',
        password: 'amrita@1234#',
        phoneNumber: '1234567891',
        address: 'Patia, BBSR',
        state: 'Odisha',
        zipCode: '751024'
    }
];

export const handleLogin = (email, password) => {
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
        localStorage.setItem('loggedInUser', JSON.stringify(ADMIN_CREDENTIALS));
        return { success: true, role: 'admin' };
    }

    const customerProfile = CUSTOMER_CREDENTIALS.find(
        (customer) => customer.email === email && customer.password === password
    );
    if (customerProfile) {
        localStorage.setItem('loggedInUser', JSON.stringify(customerProfile));
        return { success: true, role: 'customer' };
    }

    return { success: false, message: 'Invalid credentials' };
};

export const getUserProfile = () => {
    const user = localStorage.getItem('loggedInUser');
    return user ? JSON.parse(user) : null;
};
