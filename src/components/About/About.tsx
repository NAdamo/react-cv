import React, { FunctionComponent } from 'react';
import { Box, Chip, Card, CardMedia, CardContent, Avatar, Typography, Grid, Table, TableBody, TableRow, TableCell, withStyles, makeStyles, createStyles, Theme, Link, useTheme, useMediaQuery } from '@material-ui/core';
import { useSkills } from './useSkills';
import { useBasicInformation } from './useBasicInformation';


const NoBorderTableCell = withStyles({
    root: {
        borderBottom: "none"
    }
})(TableCell);

const useStyles = makeStyles((theme: Theme) => createStyles({
    sectionAbout: {

    },
    chips: {
        margin: theme.spacing(0.5)
    },
    bigAvatar: {
        width: theme.spacing(40),
        height: theme.spacing(40),
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(16),
            height: theme.spacing(16),
        }
    },
    header: {
        backgroundColor: '#f2f2f2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: theme.spacing(2),
        fontSize: "4rem",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            '& h1': {
                fontSize: "2.5rem",
                textAlign: "center"
            },
            '& h6': {
                textAlign: "center"
            }
        }
    }
})
);


export const About: FunctionComponent = () => {
    const classes = useStyles();
    const basicInformation = useBasicInformation();
    const skills = useSkills();
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.only('xs'));
    const direction = matchesXS ? "column-reverse" : "row";


    return (<Card component="section" className={classes.sectionAbout}>
        <CardMedia className={classes.header}>
            <Avatar variant="circular" alt='Németh Ádám' src={'/assets/nadamo.jpeg'} className={classes.bigAvatar}></Avatar>
            <Box>
                <Typography variant="h1" color="textPrimary">I'm Ádám Németh</Typography>
                <Typography variant="h6" color="textPrimary">Team lead, Web developer</Typography>
            </Box>
        </CardMedia>
        <CardContent>
            <Grid container spacing={1} direction={direction}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" color="initial">Skills</Typography>
                    <Box component="ul" flexWrap="wrap" display="flex" justifyContent="space-around" padding

                        ="0">
                        {skills.map((skill) => (
                            <Chip
                                label={skill.label}
                                component="li"
                                key={skill.key}
                                icon={skill.icon}
                                className={classes.chips}
                            />))}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" color="initial">Basic Information</Typography>
                    <Table size="small">
                        <TableBody>
                            {
                                basicInformation.map((info) => (
                                    <TableRow key={info.key}>
                                        <NoBorderTableCell variant="head">{info.label}</NoBorderTableCell>
                                        <NoBorderTableCell>{info.href ? <Link href={info.href}>{info.value}</Link> : info.value}</NoBorderTableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
    );
}
