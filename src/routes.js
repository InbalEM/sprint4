import { BnbApp } from './pages/bnb-app'
import { StayEdit } from './pages/add-edit-stay'
// Routes accesible from the main navigation (in AppHeader)

const routes = [
    {
        path: '/',
        component: <BnbApp />,
        label: 'bnbs'
    },
    {
        path: 'edit',
        component: <StayEdit />,
        label: 'Edit'
    }
    // {
    //     path: 'review',
    //     component: <ReviewApp />,
    //     label: 'Reviews'
    // },
    // {
    //     path: 'chat',
    //     component: <ChatApp />,
    //     label: 'Chat'
    // },
    // {
    //     path: 'about',
    //     component: <AboutUs />,
    //     label: 'About us'
    // },
    // {
    //     path: 'admin',
    //     component: <AdminApp />,
    //     label: 'Admin Only'
    // }
]

export default routes