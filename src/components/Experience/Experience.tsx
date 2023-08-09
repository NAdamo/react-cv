import React, { FunctionComponent } from 'react';
import { Typography, Box } from '@mui/material';
import { Timeline } from '@mui/lab';
import { useJobs } from './useJobs';
import { CVTimelineItem } from './CVTimelineItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Experience: FunctionComponent = () => {
    const jobs = useJobs();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const isPrint = useMediaQuery('print');
    return (
        <Box component="section" sx={{
            mt: 2,
            '@media print': {
                marginTop: 0
            }
        }}>
            <Typography variant="h4" color="initial">Experience</Typography>
            <Timeline position={isSmallScreen || isPrint ? "right" : "alternate"} sx={{ p: 0 }}>
                {jobs.map(job => (<CVTimelineItem key={`${job.workplace}-${job.role}`} job={job} />))}
            </Timeline>
        </Box>
    )
};
