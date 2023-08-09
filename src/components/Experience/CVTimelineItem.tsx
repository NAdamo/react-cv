import React, { FunctionComponent } from "react";
import { Typography, Paper, Grid, useMediaQuery, useTheme } from "@mui/material";
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import WorkplaceIcon from '@mui/icons-material/Business';
import RoleIcon from '@mui/icons-material/AssignmentOutlined';
import DescriptionIcon from '@mui/icons-material/DescriptionOutlined';

import { Job } from './useJobs'

type CVTimelineItemProps = {
    job: Job
}

export const CVTimelineItem: FunctionComponent<CVTimelineItemProps> = ({ job }) => {
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.only('xs'));
    const matchesPrint = useMediaQuery('print');
    const shouldDisplay = matchesXS || matchesPrint;
    return (
        <TimelineItem sx={{ display: { xs: 'block', sm: 'flex', '@media print': { display: 'block', padding: 0 } } }}>
            {shouldDisplay ? null : <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">{job.date}</Typography>
            </TimelineOppositeContent>}
            {shouldDisplay ? null : <TimelineSeparator  >
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>}
            <TimelineContent sx={{ '@media print': { padding: 0 } }}>
                <Paper sx={{
                    p: 1,
                    mb: { xs: 3, sm: 0 },
                    '@media print': {
                        boxShadow: 'none',
                        breakInside: 'avoid-page',
                        marginBottom: theme.spacing(1),
                        padding: 0
                    },
                }}>
                    <Grid container alignItems="center" spacing={2}>
                        {shouldDisplay ? null : <Grid item>
                            <RoleIcon />
                        </Grid>}
                        <Grid item>
                            <Typography variant="h5" color="textPrimary">
                                {job.role}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" spacing={2}>
                        {shouldDisplay ? null : <Grid item>
                            <WorkplaceIcon />
                        </Grid>}
                        <Grid item>
                            <Typography variant="h6" color="textPrimary">
                                {job.workplace}
                            </Typography>
                        </Grid>
                    </Grid>
                    {shouldDisplay ? <Grid container alignItems="center" spacing={2}>
                        <Grid item>
                            <Typography variant="body2" color="textSecondary">
                                {job.date}
                            </Typography>
                        </Grid>
                    </Grid> : null}
                    <Grid container alignItems="flex-start" spacing={2}>
                        {shouldDisplay ? null : <Grid item>
                            <DescriptionIcon />
                        </Grid>}
                        <Grid item xs>
                            <Typography>
                                {job.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </TimelineContent>
        </TimelineItem>
    )
}