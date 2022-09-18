import {BnbApp} from './pages/bnb-app'
import { StayDetails } from './pages/stay-details'
import { StayEdit } from './pages/add-edit-stay'
import { ReserveSummary } from './pages/reserve-summary'

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
    },
    {
        path: 'summary',
        component: <ReserveSummary />,
        label: 'Summary'
    }
]

export default routes
