const data = [
  // 서울특별시
  { key: '1', parentKey: null, name: '서울특별시', type: '광역시', population: 9776000, area: '605 km²', createdDate: '2024-01-01', updatedDate: '2024-09-01' },
  
  // 서울특별시 구
  { key: '2', parentKey: '1', name: '강남구', type: '구', population: 600000, area: '39.5 km²', createdDate: '2024-01-15', updatedDate: '2024-09-01' },
  { key: '3', parentKey: '1', name: '마포구', type: '구', population: 370000, area: '23.0 km²', createdDate: '2024-02-20', updatedDate: '2024-09-02' },
  { key: '4', parentKey: '1', name: '송파구', type: '구', population: 670000, area: '33.9 km²', createdDate: '2024-02-25', updatedDate: '2024-09-03' },
  { key: '5', parentKey: '1', name: '서초구', type: '구', population: 430000, area: '47.0 km²', createdDate: '2024-03-01', updatedDate: '2024-09-04' },

  // 서울특별시 읍면동
  { key: '6', parentKey: '2', name: '역삼동', type: '읍면동', population: 20000, area: '2.5 km²', createdDate: '2024-01-20', updatedDate: '2024-09-01' },
  { key: '7', parentKey: '2', name: '청담동', type: '읍면동', population: 30000, area: '3.0 km²', createdDate: '2024-02-25', updatedDate: '2024-09-02' },
  { key: '8', parentKey: '3', name: '서교동', type: '읍면동', population: 15000, area: '1.5 km²', createdDate: '2024-03-01', updatedDate: '2024-09-03' },
  { key: '9', parentKey: '3', name: '홍대동', type: '읍면동', population: 25000, area: '2.0 km²', createdDate: '2024-03-15', updatedDate: '2024-09-04' },
  { key: '10', parentKey: '4', name: '잠실동', type: '읍면동', population: 45000, area: '4.2 km²', createdDate: '2024-03-20', updatedDate: '2024-09-05' },
  { key: '11', parentKey: '4', name: '문정동', type: '읍면동', population: 32000, area: '3.5 km²', createdDate: '2024-03-25', updatedDate: '2024-09-06' },
  { key: '12', parentKey: '5', name: '반포동', type: '읍면동', population: 23000, area: '2.8 km²', createdDate: '2024-03-30', updatedDate: '2024-09-07' },
  { key: '13', parentKey: '5', name: '방배동', type: '읍면동', population: 26000, area: '3.1 km²', createdDate: '2024-04-01', updatedDate: '2024-09-08' },

  // 부산광역시
  { key: '14', parentKey: null, name: '부산광역시', type: '광역시', population: 3410000, area: '770 km²', createdDate: '2024-02-01', updatedDate: '2024-09-02' },
  
  // 부산광역시 구
  { key: '15', parentKey: '14', name: '서면', type: '구', population: 150000, area: '15.3 km²', createdDate: '2024-03-25', updatedDate: '2024-09-03' },
  { key: '16', parentKey: '14', name: '해운대구', type: '구', population: 424000, area: '51.44 km²', createdDate: '2024-04-01', updatedDate: '2024-09-04' },
  { key: '17', parentKey: '14', name: '영도구', type: '구', population: 120000, area: '14.2 km²', createdDate: '2024-04-10', updatedDate: '2024-09-05' },
  { key: '18', parentKey: '14', name: '남구', type: '구', population: 280000, area: '26.8 km²', createdDate: '2024-04-15', updatedDate: '2024-09-06' },

  // 부산광역시 읍면동
  { key: '19', parentKey: '15', name: '부전동', type: '읍면동', population: 20000, area: '2.0 km²', createdDate: '2024-03-30', updatedDate: '2024-09-05' },
  { key: '20', parentKey: '15', name: '전포동', type: '읍면동', population: 22000, area: '2.2 km²', createdDate: '2024-04-05', updatedDate: '2024-09-06' },
  { key: '21', parentKey: '16', name: '좌동', type: '읍면동', population: 36000, area: '4.5 km²', createdDate: '2024-04-20', updatedDate: '2024-09-07' },
  { key: '22', parentKey: '16', name: '우동', type: '읍면동', population: 34000, area: '4.2 km²', createdDate: '2024-04-25', updatedDate: '2024-09-08' },
  { key: '23', parentKey: '17', name: '청학동', type: '읍면동', population: 18000, area: '2.0 km²', createdDate: '2024-05-01', updatedDate: '2024-09-09' },
  { key: '24', parentKey: '18', name: '대연동', type: '읍면동', population: 25000, area: '3.5 km²', createdDate: '2024-05-05', updatedDate: '2024-09-10' },

  // 광주광역시
  { key: '25', parentKey: null, name: '광주광역시', type: '광역시', population: 1500000, area: '501 km²', createdDate: '2024-03-01', updatedDate: '2024-09-03' },
  
  // 광주광역시 구
  { key: '26', parentKey: '25', name: '서구', type: '구', population: 60000, area: '10.0 km²', createdDate: '2024-08-01', updatedDate: '2024-09-13' },
  { key: '27', parentKey: '25', name: '남구', type: '구', population: 140000, area: '21.0 km²', createdDate: '2024-08-10', updatedDate: '2024-09-14' },
  { key: '28', parentKey: '25', name: '동구', type: '구', population: 90000, area: '12.0 km²', createdDate: '2024-08-15', updatedDate: '2024-09-15' },
  { key: '29', parentKey: '25', name: '북구', type: '구', population: 210000, area: '27.5 km²', createdDate: '2024-08-20', updatedDate: '2024-09-16' },

  // 광주광역시 읍면동
  { key: '30', parentKey: '26', name: '상무동', type: '


// 광주광역시 읍면동
  { key: '30', parentKey: '26', name: '상무동', type: '읍면동', population: 15000, area: '1.5 km²', createdDate: '2024-08-01', updatedDate: '2024-09-08' },
  { key: '31', parentKey: '26', name: '치평동', type: '읍면동', population: 12000, area: '1.8 km²', createdDate: '2024-08-05', updatedDate: '2024-09-09' },
  { key: '32', parentKey: '27', name: '봉선동', type: '읍면동', population: 17000, area: '2.3 km²', createdDate: '2024-08-12', updatedDate: '2024-09-10' },
  { key: '33', parentKey: '28', name: '산수동', type: '읍면동', population: 13000, area: '1.7 km²', createdDate: '2024-08-17', updatedDate: '2024-09-11' },
  { key: '34', parentKey: '29', name: '용봉동', type: '읍면동', population: 19000, area: '2.2 km²', createdDate: '2024-08-23', updatedDate: '2024-09-12' },

  // 경기도
  { key: '35', parentKey: null, name: '경기도', type: '도', population: 13950000, area: '10250 km²', createdDate: '2024-04-01', updatedDate: '2024-09-04' },
  
  // 경기도 구군시
  { key: '36', parentKey: '35', name: '수원시', type: '구군시', population: 1240000, area: '121.7 km²', createdDate: '2024-06-10', updatedDate: '2024-09-14' },
  { key: '37', parentKey: '35', name: '성남시', type: '구군시', population: 1030000, area: '141.2 km²', createdDate: '2024-07-01', updatedDate: '2024-09-15' },
  { key: '38', parentKey: '35', name: '고양시', type: '구군시', population: 1080000, area: '267.0 km²', createdDate: '2024-07-15', updatedDate: '2024-09-16' },
  { key: '39', parentKey: '35', name: '용인시', type: '구군시', population: 1050000, area: '591.9 km²', createdDate: '2024-08-15', updatedDate: '2024-09-18' },
  { key: '40', parentKey: '35', name: '안양시', type: '구군시', population: 580000, area: '58.5 km²', createdDate: '2024-09-01', updatedDate: '2024-09-19' },

  // 경기도 읍면동
  { key: '41', parentKey: '36', name: '영통동', type: '읍면동', population: 80000, area: '8.0 km²', createdDate: '2024-06-20', updatedDate: '2024-09-19' },
  { key: '42', parentKey: '36', name: '권선동', type: '읍면동', population: 60000, area: '6.0 km²', createdDate: '2024-06-25', updatedDate: '2024-09-20' },
  { key: '43', parentKey: '37', name: '분당동', type: '읍면동', population: 85000, area: '9.0 km²', createdDate: '2024-07-05', updatedDate: '2024-09-21' },
  { key: '44', parentKey: '37', name: '야탑동', type: '읍면동', population: 62000, area: '6.5 km²', createdDate: '2024-07-10', updatedDate: '2024-09-22' },
  { key: '45', parentKey: '38', name: '일산동', type: '읍면동', population: 77000, area: '7.8 km²', createdDate: '2024-07-20', updatedDate: '2024-09-23' },
  { key: '46', parentKey: '38', name: '백석동', type: '읍면동', population: 69000, area: '7.5 km²', createdDate: '2024-07-25', updatedDate: '2024-09-24' },
  { key: '47', parentKey: '39', name: '처인구', type: '읍면동', population: 54000, area: '11.0 km²', createdDate: '2024-08-20', updatedDate: '2024-09-25' },
  { key: '48', parentKey: '39', name: '수지구', type: '읍면동', population: 72000, area: '12.0 km²', createdDate: '2024-08-25', updatedDate: '2024-09-26' },
  { key: '49', parentKey: '40', name: '만안동', type: '읍면동', population: 30000, area: '4.0 km²', createdDate: '2024-09-05', updatedDate: '2024-09-27' },
  { key: '50', parentKey: '40', name: '평촌동', type: '읍면동', population: 45000, area: '5.5 km²', createdDate: '2024-09-10', updatedDate: '2024-09-28' }
];