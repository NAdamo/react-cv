import React, { FunctionComponent } from 'react';
import { Typography, makeStyles, createStyles, Theme, Box } from '@material-ui/core';
import { Timeline } from '@material-ui/lab';
import { useJobs } from './useJobs';
import { CVTimelineItem } from './CVTimelineItem';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme: Theme) => createStyles({
    sectionExperience: {
        marginTop: theme.spacing(2),
        '@media print': {
            marginTop: 0
        }
    },
    noPadding: {
        padding: 0
    }
})
);

export const Experience: FunctionComponent = () => {
    const classes = useStyles();
    const jobs = useJobs();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Box component="section" className={classes.sectionExperience}>
            <Typography variant="h4" color="initial">Experience</Typography>
            <Timeline align={isSmallScreen ? "left" : "alternate"} className={classes.noPadding}>
                {jobs.map(job => (<CVTimelineItem key={`${job.workplace}-${job.role}`} job={job} />))}
            </Timeline>
        </Box>
    )
};
