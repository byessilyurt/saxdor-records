function createData(model, yil,durum, hull, lokasyon, sahipAd, sahipSoyad, sahipEmail, sahipTel,
    kaydedenAd, kaydedenSoyad, kaydedenEmail, kaydedenTel, kayitTipi, tarih, detay) {
    return {
        model, yil,durum, hull, lokasyon, sahipAd, sahipSoyad, sahipEmail, sahipTel,
        kaydedenAd, kaydedenSoyad, kaydedenEmail, kaydedenTel, kayitTipi, tarih, detay
    };
}

export function createRecordsStore() {
    return {
        records: [],

        addRecord(model, yil,durum, hull, lokasyon, sahipAd, sahipSoyad, sahipEmail, sahipTel,
            kaydedenAd, kaydedenSoyad, kaydedenEmail, kaydedenTel, kayitTipi, tarih, detay, ozet) {
                this.records.push(createData(model,yil,durum,hull,lokasyon,sahipAd,sahipSoyad,sahipEmail,sahipTel,
                    kaydedenAd,kaydedenSoyad,kaydedenEmail,kaydedenTel,kayitTipi,tarih,detay,ozet))
        },

    }
}

