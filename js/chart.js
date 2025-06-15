Chart.register(ChartDataLabels);

const charts = [
  //Candi Gedong Songo
  //TCM
  {
    id: 'pieKunjunganCandi',
    data: [5, 73, 22],
    labels: ['1 kali kunjungan', '2 kali kunjungan', '3 kali kunjungan'],
    colors: ['blue', 'orange','grey']
  },
  {
    id: 'pieTotalCandi',
    data: [47, 29, 12, 6, 5, 1],
    labels: ['0-100 ribu', '101-200 ribu', '201-300 ribu', '301-400 ribu', '401-500 ribu', '>500 ribu'],
    colors: ['blue','orange','grey','yellow','lightblue','green']
  },
  {
    id: 'pieUsiaCandi',
    data: [1, 99, 0.0001, 0.0001],
    labels: ['remaja (10-19)','dewasa (20-59)','lansia (60-89)','manula (>90)'],
    colors: ['blue','orange','grey','yellow']
  },
  {
    id: 'piePendidikanCandi',
    data: [0.0001, 1, 32, 2, 2, 15, 46, 2, 0.0001],
    labels: ['SD','SMP','SMA','D1','D2','D3','S1','S2','S3'],
    colors: ['blue','orange','grey','yellow','lightblue','green','purple','lightgreen','brown']
  },
  {
    id: 'piePendapatanCandi',
    data: [13, 56, 31, 0.0001],
    labels: ['10-30 juta','31-50 juta','51-80 juta','>80 juta'],
    colors: ['blue', 'orange','grey','yellow']
  },
  {
    id: 'pieLamaCandi',
    data: [5, 9, 24, 29, 19, 10, 4],
    labels: ['1 jam','2 jam','3 jam','4 jam','5 jam','6 jam','7 jam'],
    colors: ['blue', 'orange','grey','yellow','lightblue','green','purple']
  },
  {
    id: 'pieAlternatifCandi',
    data: [61, 39],
    labels: ['Ya, ada','Tidak'],
    colors: ['blue', 'orange']
  },

  //CVM
  {
    id: 'piePekerjaanCandi',
    data: [3,3,3,23,26,5,6,8,3,14,3,3],
    labels: ['Ticketing','Scan Tiket','UMKM Ice Cream','Pemandu Kuda','Fotografer','UMKM Penjual Bunga','Cleaning Service','Pedagang Oleh-oleh','UMKM Penjual Minuman','UMKM Warung','Tukang Parkir','UMKM Penjual Siomay'],
    colors: ['blue','orange','grey','yellow','lightblue','green','purple','lightgreen','brown','deeppink','aquamarine','red']
  },
  {
    id: 'pieWTPCandi',
    data: [27,61,12],
    labels: ['1-25 ribu','25-50 ribu','50-100 ribu'],
    colors: ['blue', 'orange','grey']
  },
  {
    id: 'pieKeberadaanCandi',
    data: [0.0001,0.0001,0.0001,44,23],
    labels: ['Tidak Perlu','Kurang Perlu','Biasa Saja','Cukup Perlu','Sangat Perlu'],
    colors: ['blue', 'orange','grey','yellow','lightblue']
  },
  {
    id: 'pieUsiaCVMCandi',
    data: [0.0001,100,0.0001,0.0001],
    labels: ['remaja (10-19)','dewasa (20-59)','lansia (60-89)','manula (>90)'],
    colors: ['blue', 'orange','grey','yellow']
  },
  {
    id: 'piePendidikanCVMCandi',
    data: [22,37,37,2,0.0001,2,0.0001,0.0001,0.0001],
    labels: ['SD','SMP','SMA','D1','D2','D3','S1','S2','S3'],
    colors: ['blue','orange','grey','yellow','lightblue','green','purple','lightgreen','brown']
  },
  {
    id: 'pieKeluargaCandi',
    data: [32,68,0.0001],
    labels: ['1-3','4-6','>7'],
    colors: ['blue', 'orange','grey']
  },
  {
    id: 'piePendapatanCVMCandi',
    data: [68,32,0.0001,0.0001],
    labels: ['10-30 juta','31-50 juta','51-80 juta','>80 juta'],
    colors: ['blue', 'orange','grey','yellow']
  },
  {
    id: 'pieManfaatCandi',
    data: [0.0001,0.0001,0.0001,54,46],
    labels: ['Tidak Bermanfaaat','Kurang Bermanfaat','Biasa Saja','Cukup Bermanfaat','Sangat Bermanfaat'],
    colors: ['blue', 'orange','grey','yellow','lightblue']
  },
  {
    id: 'pieKepentinganCandi',
    data: [0.0001,0.0001,0.0001,54,46],
    labels: ['Tidak Penting','Kurang Penting','Biasa Saja','Cukup Penting','Sangat Penting'],
    colors: ['blue', 'orange','grey','yellow','lightblue']
  },
  {
    id: 'pieKonversiCandi',
    data: [7,12,27,27,27],
    labels: ['Tidak Setuju','Kurang Setuju','Biasa Saja','Cukup Setuju','Sangat Setuju'],
    colors: ['blue', 'orange','grey','yellow','lightblue']
  },
  {
    id: 'piePartisipasiCandi',
    data: [0.0001,5,5,63,27],
    labels: ['Tidak Bersedia','Kurang Bersedia','Biasa Saja','Bersedia','Sangat Bersedia'],
    colors: ['blue', 'orange','grey','yellow','lightblue']
  },

  //Taman Bunga Celosia
  //TCM
  {
    id: 'pieKunjunganCelosia',
    data: [5, 62, 33],
    labels: ['1 kali kunjungan', '2 kali kunjungan', '3 kali kunjungan'],
    colors: ['blue', 'orange','grey']
  },
  {
    id: 'pieTotalCelosia',
    data: [41,23,30,4,1,1],
    labels: ['0-100 ribu', '101-200 ribu', '201-300 ribu', '301-400 ribu', '401-500 ribu', '>500 ribu'],
    colors: ['blue','orange','grey','yellow','lightblue','green']
  },
  {
    id: 'pieUsiaCelosia',
    data: [0.0001, 99, 1, 0.0001],
    labels: ['remaja (10-19)','dewasa (20-59)','lansia (60-89)','manula (>90)'],
    colors: ['blue','orange','grey','yellow']
  },
  {
    id: 'piePendidikanCelosia',
    data: [0.0001, 0.0001, 30, 4, 8, 15, 41, 2, 0.0001],
    labels: ['SD','SMP','SMA','D1','D2','D3','S1','S2','S3'],
    colors: ['blue','orange','grey','yellow','lightblue','green','purple','lightgreen','brown']
  },
  {
    id: 'piePendapatanCelosia',
    data: [11, 48, 39, 2],
    labels: ['10-30 juta','31-50 juta','51-80 juta','>80 juta'],
    colors: ['blue', 'orange','grey','yellow']
  },
  {
    id: 'pieLamaCelosia',
    data: [5, 14, 22, 36, 14, 8, 1],
    labels: ['1 jam','2 jam','3 jam','4 jam','5 jam','6 jam','7 jam'],
    colors: ['blue', 'orange','grey','yellow','lightblue','green','purple']
  },
  {
    id: 'pieAlternatifCelosia',
    data: [67, 33],
    labels: ['Ya, ada','Tidak'],
    colors: ['blue', 'orange']
  },

  //CVM
  {
    id: 'piePekerjaanCelosia',
    data: [11,3,6,5,50,6,3,1,15],
    labels: ['Fotografer','Parking','Petugas Rawat Tanaman','Petugas Sapu','Petugas Wahana','Security','Ticketing Parkir','Ticketing Tiket Masuk','Warung Makan'],
    colors: ['blue','orange','grey','yellow','lightblue','green','purple','lightgreen','brown','deeppink','aquamarine','red']
  },
  {
    id: 'pieWTPCelosia',
    data: [6,89,5],
    labels: ['1-25 ribu','25-50 ribu','50-100 ribu'],
    colors: ['blue', 'orange','grey']
  },
  {
    id: 'pieKeberadaanCelosia',
    data: [0.0001,0.0001,0.0001,55,45],
    labels: ['Tidak Perlu','Kurang Perlu','Biasa Saja','Cukup Perlu','Sangat Perlu'],
    colors: ['blue', 'orange','grey','yellow','lightblue']
  },
  {
    id: 'pieUsiaCVMCelosia',
    data: [0.0001,100,0.0001,0.0001],
    labels: ['remaja (10-19)','dewasa (20-59)','lansia (60-89)','manula (>90)'],
    colors: ['blue', 'orange','grey','yellow']
  },
  {
    id: 'piePendidikanCVMCelosia',
    data: [0.0001,29,50,12,9,0.0001,0.0001,0.0001],
    labels: ['SD','SMP','SMA','D1','D2','D3','S1','S2','S3'],
    colors: ['blue','orange','grey','yellow','lightblue','green','purple','lightgreen','brown']
  },
  {
    id: 'pieKeluargaCelosia',
    data: [10,15,20,25,30],
    labels: ['1','2','3','4','5'],
    colors: ['blue', 'orange','grey','yellow','lightblue']
  },
  {
    id: 'piePendapatanCVMCelosia',
    data: [24,76,0.0001,0.0001],
    labels: ['10-30 juta','31-50 juta','51-80 juta','>80 juta'],
    colors: ['blue', 'orange','grey','yellow']
  },
  {
    id: 'pieManfaatCelosia',
    data: [0.0001,0.0001,2,42,22],
    labels: ['Tidak Bermanfaaat','Kurang Bermanfaat','Biasa Saja','Cukup Bermanfaat','Sangat Bermanfaat'],
    colors: ['blue', 'orange','grey','yellow','lightblue']
  },
  {
    id: 'pieKepentinganCelosia',
    data: [0.0001,0.0001,9,67,24],
    labels: ['Tidak Penting','Kurang Penting','Biasa Saja','Cukup Penting','Sangat Penting'],
    colors: ['blue', 'orange','grey','yellow','lightblue']
  },
  {
    id: 'pieKonversiCelosia',
    data: [1,3,5,59,32],
    labels: ['Tidak Setuju','Kurang Setuju','Biasa Saja','Cukup Setuju','Sangat Setuju'],
    colors: ['blue', 'orange','grey','yellow','lightblue']
  },
  {
    id: 'piePartisipasiCelosia',
    data: [0.0001,0.0001,3,52,45],
    labels: ['Tidak Bersedia','Kurang Bersedia','Biasa Saja','Bersedia','Sangat Bersedia'],
    colors: ['blue', 'orange','grey','yellow','lightblue']
  },
];

charts.forEach(chart => {
  new Chart(document.getElementById(chart.id), {
    type: 'pie',
    data: {
      labels: chart.labels,
      datasets: [{
        data: chart.data,
        backgroundColor: chart.colors
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: { size: 12 }
          }
        },
    datalabels: {
        color: '#fff',
        formatter: value => {
            return value < 0.001 ? '' : value + '%'; 
        },
    font: { weight: 'bold', size: 14 }
    }

      }
    },
    plugins: [ChartDataLabels]
  });
});

//HPM
const barColors = ['blue','orange','grey','yellow','lightblue','green','purple','lightgreen','brown'];

const fasilitasLabels = [
  'Fasilitas umum',
  'Transportasi',
  'Fasilitas penginapan',
  'Pusat oleh-oleh dan kuliner',
  'Biaya tiket masuk wisata',
  'Fasilitas kesehatan',
  'Fasilitas peribadatan',
  'Pusat pertokoan',
  'Sarana pelayanan umum'
];

const dataGedongSongo = [4.3,4.0,4.0,4.4,4.0,3.8,4.0,4.3,4.1];
const dataCelosia = [4.4,4.0,4.0,4.3,4.2,3.9,4.1,4.2,4.1];

function drawHPMBarChart(canvasId, dataSet) {
  new Chart(document.getElementById(canvasId), {
    type: 'bar',
    data: {
      labels: fasilitasLabels,
      datasets: [{
        label: 'Rata-rata',
        data: dataSet,
        backgroundColor: barColors
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 5,
          title: {
            display: true,
            text: 'Rata-rata'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Variabel'
          }
        }
      },
      plugins: {
        legend: { display: false },
        datalabels: {
          anchor: 'end',
          align: 'top',
          formatter: val => val.toFixed(2),
          font: { weight: 'bold' }
        }
      }
    },
    plugins: [ChartDataLabels]
  });
}

drawHPMBarChart('barHPMCandi', dataGedongSongo);
drawHPMBarChart('barHPMCelosia', dataCelosia)

//Data Pengunjung
const tahunLabels = ['2020', '2021', '2022', '2023', '2024'];
const dataPengunjungCandi = [321071, 150375, 426361, 359316, 312776];
const dataPengunjungCelosia = [49985, 15875, 165096, 375777, 339959];
const warnaPengunjung = ['#64b5f6', '#4fc3f7', '#29b6f6', '#03a9f4', '#0288d1'];

function drawVisitorBarChart(canvasId, dataSet, labels = [], colors = []) {
  new Chart(document.getElementById(canvasId), {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Jumlah Pengunjung',
        data: dataSet,
        backgroundColor: colors
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Jumlah Pengunjung'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Tahun'
          }
        }
      },
      plugins: {
        legend: { display: false },
        datalabels: {
          anchor: 'end',
          align: 'top',
          formatter: val => val.toLocaleString(),
          font: { weight: 'bold' }
        }
      }
    },
    plugins: [ChartDataLabels]
  });
}

drawVisitorBarChart('chartPengunjungCandi', dataPengunjungCandi, tahunLabels, warnaPengunjung);
drawVisitorBarChart('chartPengunjungCelosia', dataPengunjungCelosia, tahunLabels, warnaPengunjung);