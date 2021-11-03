import React, { FunctionComponent } from 'react';
import { Box, Chip, Card, CardMedia, CardContent, Typography, Grid, Table, TableBody, TableRow, TableCell, withStyles, makeStyles, createStyles, Theme, Link, useTheme, useMediaQuery, Button } from '@material-ui/core';
import { useSkills } from './useSkills';
import { useBasicInformation } from './useBasicInformation';
import { DateTime } from 'luxon';
import FileDownloadIcon from 'mdi-material-ui/FileDownload';


const NoBorderTableCell = withStyles({
    root: {
        borderBottom: "none"
    }
})(TableCell);

const useStyles = makeStyles((theme: Theme) => createStyles({
    sectionAbout: {
        '@media print': {
            boxShadow: 'none'
        }
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
        padding: theme.spacing(4),
        fontSize: "4rem",
        '& > div': {
            textAlign: "center"
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            padding: theme.spacing(2),
            '& h1': {
                fontSize: "2.5rem",
            }
        }
    },
    hideOnPrint: {
        '@media print': {
            display: 'none'
        }
    }
})
);


export const About: FunctionComponent = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.only('xs'));
    const matchesPrint = useMediaQuery('print');
    const direction = matchesXS ? (matchesPrint ? "row-reverse" : "column-reverse") : "row";

    const skills = useSkills();
    const basicInformation = useBasicInformation(matchesPrint);


    return (<Card component="section" className={classes.sectionAbout}>
        <CardMedia className={classes.header}>
            <Box>
                <Typography variant="h1" color="textPrimary">I'm Ádám Németh</Typography>
                <Typography variant="h6" color="textPrimary">Team lead, Web developer</Typography>
                <Button
                    variant="contained"
                    href="/assets/Adam_Nemeth_20211102.pdf"
                    download={`Adam_Nemeth_${DateTime.now().toISODate()}.pdf`}
                    startIcon={<FileDownloadIcon />}
                    size="large"
                    className={classes.hideOnPrint}
                >
                    Download cv as PDF
                </Button>
            </Box>
        </CardMedia>
        <CardContent>
            <Grid container spacing={1} direction={direction}>
                <Grid item xs={matchesPrint ? 6 : 12} md={6}>
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
                <Grid item xs={matchesPrint ? 6 : 12} md={6}>
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
