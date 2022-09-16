
import {BnbApp} from './pages/bnb-app'
import { StayDetails } from './pages/stay-details'
// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <BnbApp />,
        label: 'bnbs'
    },
    {
        path: 'details/:id',
        component: <StayDetails />,
        label: 'Details'
    },
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