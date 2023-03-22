import React from 'react'
import { Suspense } from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/material';


const Dashboard = React.lazy(() => import('../Dashboard/Dashboard'))

// const BaseUrl = process.env.REACT_APP_BASE_URL

function RegUsersListUpdate() {
    return (
        <>
            <Suspense fallback={<div><Box sx={{ width: '100%' }}><LinearProgress /></Box></div>}>
                <Dashboard>
                    <h3>
                        RegUsersListUpdate
                    </h3>
                </Dashboard>
            </Suspense>
        </>
    )
}

export default RegUsersListUpdate
