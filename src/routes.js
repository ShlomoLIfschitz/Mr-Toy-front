import { HomePage } from './pages/home-page.jsx'
import { AboutUs } from './pages/about-us.jsx'
import { ToyApp } from '../src/pages/toy-app.jsx'
import { ToyDetails } from './cmps/toy-details.jsx'
import { ToyEdit } from '../src/cmps/toy-edit.jsx'
import { UserProfile } from './pages/user-profile.jsx'
import { ReviewApp } from '../src/pages/review-app.jsx'

export default [
    {
        path: '/toy/edit/:toyId?',
        component: ToyEdit
    },
    {
        path: '/toy/:toyId',
        component: ToyDetails
    },
    {
        path: '/toy',
        component: ToyApp,
    },
    {
        path: '/',
        component: HomePage,
    },

    {
        path: '/about',
        component: AboutUs,
    },
    {
        path: '/review/:toyId?',
        component: ReviewApp
    },
    {
        path: '/review',
        component: ReviewApp
    }

]
