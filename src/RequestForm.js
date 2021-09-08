import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, Paper, Typography } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Divider from '@material-ui/core/Divider';
import { Fab } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useRecordsStore } from './recordsContext';
import moment from 'moment';




const useStyles = makeStyles(() => ({

    formControl: {
        display: "inline",
    },
    formGroup: {
        marginTop: 30,
    },
    paper: {
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    selector: {
        marginTop: 10,
    },
    datePicker: {
        marginTop: 16,
        marginLeft: 15,
    },
    textField: {
        marginRight: 10,
    }
}));

const RequestForm = () => {
    const recordsStore = useRecordsStore();

    const classes = useStyles();
    const [model, setModel] = React.useState("");
    const [yil, setYil] = React.useState(new Date());
    const [durum, setDurum] = React.useState("");
    const [lokasyon, setLokasyon] = React.useState("");
    const [hull, setHull] = React.useState("");

    const [sahipAd, setSahipAd] = React.useState("");
    const [sahipSoyad, setSahipSoyad] = React.useState("");
    const [sahipEmail, setSahipEmail] = React.useState("");
    const [sahipTel, setSahipTel] = React.useState(0);

    const [kaydedenAd, setKaydedenAd] = React.useState("");
    const [kaydedenSoyad, setKaydedenSoyad] = React.useState("");
    const [kaydedenEmail, setKaydedenEmail] = React.useState("");
    const [kaydedenTel, setKaydedenTel] = React.useState(0);


    const [kayitTipi, setKayitTipi] = React.useState("");
    const [detay, setDetay] = React.useState("");
    const [ozet, setOzet] = React.useState();

    moment.locale("tr")
    const tarih = moment().format('LLLL')


    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            recordsStore.addRecord(model, yil, durum, hull, lokasyon, sahipAd, sahipSoyad, sahipEmail, sahipTel,
                kaydedenAd, kaydedenSoyad, kaydedenEmail, kaydedenTel, kayitTipi, tarih, detay, ozet)
            setModel("")
            setDurum("")
            setHull("")
            setLokasyon("")
            setSahipAd("")
            setSahipSoyad("")
            setSahipEmail("")
            setSahipTel(0)
            setKaydedenAd("")
            setKaydedenSoyad("")
            setKaydedenEmail("")
            setKaydedenTel(0)
            setKayitTipi("")
            setOzet("")
            setDetay("")
        }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container direction="row">
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography>
                                Tekne Bilgileri
                            </Typography>
                            <Divider />
                            <FormControl className={classes.formControl} >
                                <div className={classes.selector}>
                                    <InputLabel >Model</InputLabel>
                                    <Select onClick={(e) => { setModel(e.target.value) }} style={{ minWidth: 200 }}  >
                                        <MenuItem value={"320 GTO"}>320 GTO</MenuItem>
                                        <MenuItem value={"320 GTR"}>320 GTR</MenuItem>
                                    </Select>
                                </div>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DatePicker
                                        views={["year"]}
                                        label="Yıl"
                                        value={yil}
                                        onChange={setYil}
                                    />
                                </MuiPickersUtilsProvider>
                                <TextField
                                    label="Durum"
                                    placeholder="Teknenin Durumu"
                                    className={classes.textField}
                                    name="durum"
                                    id="durum"
                                    value={durum}
                                    onChange={(e) => { setDurum(e.target.value) }}
                                />
                                <TextField
                                    label="Hull"
                                    placeholder="Hull Number"
                                    className={classes.textField}
                                    name="hull"
                                    value={hull}
                                    onChange={(e) => { setHull(e.target.value) }}
                                />
                                <TextField
                                    label="Lokasyon"
                                    placeholder="Tekne Nerede"
                                    className={classes.textField}
                                    name="lokasyon"
                                    value={lokasyon}
                                    onChange={(e) => { setLokasyon(e.target.value) }}
                                />
                            </FormControl>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography>
                                Tekne Sahibi
                            </Typography>
                            <Divider />
                            <FormControl className={classes.formControl} >
                                <TextField
                                    label="Ad"
                                    placeholder="Adınızı Girin"
                                    className={classes.textField}
                                    name="sahipAdi"
                                    value={sahipAd}
                                    onChange={(e) => { setSahipAd(e.target.value) }}
                                />
                                <TextField
                                    label="Soyad"
                                    placeholder="Soyadınızı Girin"
                                    className={classes.textField}
                                    name="sahipSoyadi"
                                    value={sahipSoyad}
                                    onChange={(e) => { setSahipSoyad(e.target.value) }}
                                />
                                <TextField
                                    label="Email"
                                    placeholder="Email Adresi"
                                    className={classes.textField}
                                    name="sahipEmail"
                                    value={sahipEmail}
                                    onChange={(e) => { setSahipEmail(e.target.value) }}
                                />
                                <TextField
                                    label="Telefon"
                                    placeholder="Telefon Numarası"
                                    className={classes.textField}
                                    name="sahipTel"
                                    value={sahipTel}
                                    onChange={(e) => { setSahipTel(e.target.value) }}
                                />
                            </FormControl>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography>
                                Kayıt Oluşturan Kişi
                            </Typography>
                            <Divider />
                            <FormControl className={classes.formControl}>
                                <TextField
                                    label="Ad"
                                    placeholder="Adınızı Girin"
                                    className={classes.textField}
                                    name="kaydedenAd"
                                    value={kaydedenAd}
                                    onChange={(e) => { setKaydedenAd(e.target.value) }}
                                />
                                <TextField
                                    label="Soyad"
                                    placeholder="Soyadınızı Girin"
                                    className={classes.textField}
                                    name="kaydedenSoyadi"
                                    value={kaydedenSoyad}
                                    onChange={(e) => { setKaydedenSoyad(e.target.value) }}

                                />
                                <TextField
                                    label="Email"
                                    placeholder="Email Adresi"
                                    className={classes.textField}
                                    name="kaydedenEmail"
                                    value={kaydedenEmail}
                                    onChange={(e) => { setKaydedenEmail(e.target.value) }}
                                />
                                <TextField
                                    label="Telefon"
                                    placeholder="Telefon Numarası"
                                    className={classes.textField}
                                    name="kaydedenTel"
                                    value={kaydedenTel}
                                    onChange={(e) => { setKaydedenTel(e.target.value) }}
                                />
                            </FormControl>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography>
                                Kayıt Bilgileri
                            </Typography>
                            <Divider />
                            <FormControl className={classes.formControl} >
                                <div className={classes.selector}>
                                    <InputLabel >Kayıt Tipi</InputLabel>
                                    <Select
                                        name="kayitTipi"
                                        value={kayitTipi}
                                        style={{ minWidth: 200 }}
                                        onChange={(e) => { setKayitTipi(e.target.value) }}
                                    >
                                        <MenuItem value={"Servis"}>Servis - Onarım</MenuItem>
                                        <MenuItem value={"Özel"}>Özel Talep</MenuItem>
                                    </Select>

                                </div>
                                <TextField
                                    label="Kayıt Özeti"
                                    className={classes.textField}
                                    name="ozet"
                                    value={ozet}
                                    onChange={(e) => { setOzet(e.target.value) }}
                                />
                                <TextField
                                    label="Talep Detayı"
                                    className={classes.textField}
                                    name="detay"
                                    value={detay}
                                    onChange={(e) => { setDetay(e.target.value) }}
                                />
                            </FormControl>
                        </Paper>
                    </Grid>
                    <button type={"submit"} style={{ border: "none" }}>
                        <Fab
                            size="small"
                            color="primary"
                        >
                            <SaveIcon />
                        </Fab>
                    </button>
                </Grid>
            </MuiPickersUtilsProvider>
        </form>
    );
}


export default RequestForm;