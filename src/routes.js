import { StayApp } from './pages/stay-app'
import { StayDetails } from './pages/stay-details'
import { StayEdit } from './pages/add-edit-stay'
// import { ReserveSummary } from './pages/reserve-summary'

const routes = [
    {
        path: '/',
        component: <StayApp />,
        label: 'bnbs'
    },
    {
        path: '/:checkIn/:checkOut',
        component: <StayApp />,
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
    // {
    //     path: 'summary',
    //     component: <ReserveSummary />,
    //     label: 'Summary'
    // }
]

export default routes
