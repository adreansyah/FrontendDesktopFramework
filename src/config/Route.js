import React from 'react'

/*public components*/
const Login = React.lazy(() => import('page/login'))
const PublicAccess = React.lazy(() => import('page/public-access'))
const PublicAccessDetail = React.lazy(() => import('page/public-access/Detail'))

/*private components*/
const Error404 = React.lazy(() => import('page/error/Error404'))
const Home = React.lazy(() => import('page/home'))
const FormValidation = React.lazy(() => import('page/form-validation'))
const SamplePage = React.lazy(() => import('page/sample-page'))
const SamplePageDetail = React.lazy(() => import('page/sample-page/Detail'))
const SamplePageTest1 = React.lazy(() => import('page/sample-page/Test/One'))
const SamplePageTest2 = React.lazy(() => import('page/sample-page/Test/Two'))
const SampleRedux = React.lazy(() => import('page/sample-redux'))
const SampleReduxDetail = React.lazy(() => import('page/sample-redux/Detail'))
const SampleCrud = React.lazy(() => import('page/sample-crud'))
const Graphql = React.lazy(() => import('page/graphql'));

const publicRoute = [
  { exact: true, path: '/login', name: 'Login', component: Login },
  { exact: true, path: '/public-access', name: 'Public Access', component: PublicAccess },
  { exact: true, path: '/public-access/detail', name: 'Public Access Detail', component: PublicAccessDetail },
]

const privateRoute = [
  { exact: true, path: '/', name: 'Home', component: Home },
  { exact: true, path: '/form-validation', name: 'Form Validation', component: FormValidation },
  { exact: true, path: '/sample-crud', name: 'Sample Crud', component: SampleCrud },
  { exact: true, path: '/sample-page', name: 'Sample Page', component: SamplePage },
  { exact: true, path: '/sample-page/detail', name: 'Sample Page Detail', component: SamplePageDetail },
  { exact: true, path: '/sample-page/test-1', name: 'Page Test 1', component: SamplePageTest1 },
  { exact: true, path: '/sample-page/test-2', name: 'Page Test 2', component: SamplePageTest2 },
  { exact: true, path: '/sample-redux', name: 'Sample Redux', component: SampleRedux },
  { exact: true, path: '/sample-redux/detail/:id', name: 'Sample Redux Detail', component: SampleReduxDetail },
  { exact: true, path: '/graphQl', name: 'Sample GraphQL', component: Graphql },
  { exact: true, path: '*', name: 'Page Not Found', component: Error404 },
]

const routes = { 'public': publicRoute, 'private': privateRoute }

export default routes