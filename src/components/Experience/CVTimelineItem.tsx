import React, { FunctionComponent } from "react";
import { Typography, Paper, Grid, withStyles, makeStyles, createStyles } from "@material-ui/core";
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@material-ui/lab";
import WorkplaceIcon from '@material-ui/icons/Business';
import RoleIcon from '@material-ui/icons/AssignmentOutlined';
import DescriptionIcon from '@material-ui/icons/DescriptionOutlined';

import { Job } from './useJobs'

type CVTimelineItemProps = {
    job: Job
}

const CVTimelinePaper = withStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(3)
        },
        '@media print': {
            boxShadow: 'none',
            breakInside: 'avoid-page',
            marginBottom: theme.spacing(1)
        }
    }
}))(Paper)

const useStyles = makeStyles((theme) => createStyles({
    hiddenXS: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    noPaddingXS: {
        [theme.breakpoints.down('sm')]: {
            padding: 0
        }
    }

}))

export const CVTimelineItem: FunctionComponent<CVTimelineItemProps> = ({ job }) => {
    const classes = useStyles();
    return (
        <TimelineItem>
            <TimelineOppositeContent className={classes.hiddenXS}>
                <Typography variant="body2" color="textSecondary">{job.date}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator className={classes.hiddenXS}>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className={classes.noPaddingXS}>
                <CVTimelinePaper>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item className={classes.hiddenXS}>
                            <RoleIcon />
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" color="textPrimary">
                                {job.role}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item className={classes.hiddenXS}>
                            <WorkplaceIcon />
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" color="textPrimary">
                                {job.workplace}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item>
                            <Typography variant="body2" color="textSecondary">
                                {job.date}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item className={classes.hiddenXS}>
                            <DescriptionIcon />
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                {job.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </CVTimelinePaper>
            </TimelineContent>
        </TimelineItem>
    )
}