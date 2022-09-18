import {BnbApp} from './pages/bnb-app'
import { StayDetails } from './pages/stay-details'
import { StayEdit } from './pages/add-edit-stay'

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
    {
        path: 'edit',
        component: <StayEdit />,
        label: 'Edit'
    }
]

export default routes