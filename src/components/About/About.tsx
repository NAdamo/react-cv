import React, { FunctionComponent, useMemo } from 'react';
import { Box, Chip, Card, CardMedia, CardContent, Typography, Grid, Table, TableBody, TableRow, TableCell, Link, useTheme, useMediaQuery, Button, SxProps, Theme } from '@mui/material';
import { useSkills } from './useSkills';
import { useBasicInformation } from './useBasicInformation';
import { DateTime } from 'luxon';
import FileDownloadIcon from 'mdi-material-ui/FileDownload';

export const About: FunctionComponent = () => {
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.only('xs'));
    const matchesPrint = useMediaQuery('print');
    const direction = useMemo(() => {
        return matchesXS ? (matchesPrint ? "row-reverse" : "column-reverse") : "row"
    }, [matchesXS, matchesPrint]);

    const skills = useSkills(matchesPrint);
    const basicInformation = useBasicInformation(matchesPrint);

    const noBorderTableCell: SxProps<Theme> = { borderBottom: 'none', pl: 0 };


    return (
        <Card component="section" sx={{
            '@media print': {
                boxShadow: 'none',
                '&:last-child': {
                    paddingBottom: theme.spacing(1)
                },
                padding: 0
            }
        }}>
            <CardMedia sx={{
                bgcolor: '#f2f2f2',
                p: 4,
                fontSize: '4rem'
            }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h1" color="textPrimary" sx={{ fontSize: { xs: '2.5rem', sm: 'unset' } }}>I'm Ádám Németh</Typography>
                    <Typography variant="h6" color="textPrimary">Team lead, Web developer</Typography>
                    <Button
                        variant="contained"
                        href="/assets/Adam_Nemeth_20230604.pdf"
                        download={`Adam_Nemeth_${DateTime.now().toISODate()}.pdf`}
                        startIcon={<FileDownloadIcon />}
                        size="large"
                        sx={{ displayPrint: 'none' }}
                    >
                        Download cv as PDF
                    </Button>
                </Box>
            </CardMedia>
            <CardContent sx={{
                '@media print': {
                    '&:last-child': {
                        paddingBottom: theme.spacing(1)
                    },
                    padding: 0
                }
            }}>
                <Grid container spacing={1} direction={direction}>
                    <Grid item xs={matchesPrint ? 6 : 12} md={6}>
                        <Typography variant="h4" color="initial">Skills</Typography>
                        <Box component="ul" flexWrap="wrap" display="flex" justifyContent="space-around" padding="0">
                            {skills.map((skill) => (
                                <Chip
                                    label={skill.label}
                                    component="li"
                                    key={skill.key}
                                    icon={skill.icon}
                                    sx={{
                                        my: 0.5,
                                        '@media print': {
                                            marginTop: 0
                                        }
                                    }}
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
                                            <TableCell variant="head" sx={noBorderTableCell}>{info.label}</TableCell>
                                            <TableCell sx={noBorderTableCell}>{info.href ? <Link href={info.href}>{info.value}</Link> : info.value}</TableCell>
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
