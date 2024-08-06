export const laundryData = {
  tickets: [
    {
      ticket_id: 1,
      category: '세탁',
      title: '흰빨래 1명 급구',
      description: '5장 이내만 가능합니다.',
      nickname: 'erica.rho',
      user_id: 1,
      capacity: 4,
      participant_user: [1, 3, 4],
      status: '빨래중',
      created_at: '2024-08-05T07:00:00',
      machine_id: 1,
      laundry_color: '어두운계열, 청색계열',
      is_dry: true,
      start_time: '2024-08-05T07:40:00',
      end_time: '2024-08-05T08:20:00',
    },
    {
      ticket_id: 2,
      category: '세탁',
      title: '속옷 빨래',
      description: '속옷만 가능합니다.',
      nickname: 'kim.yuna',
      user_id: 2,
      capacity: 3,
      participant_user: [5, 8],
      status: '모집중',
      created_at: '2024-08-05T09:00:00',
      machine_id: 2,
      laundry_color: '흰색계열',
      is_dry: false,
      start_time: '2024-08-05T09:40:00',
      end_time: '2024-08-05T10:20:00',
    },
    // 추가된 데이터 항목
    {
      ticket_id: 3,
      category: '세탁',
      title: '운동복 세탁',
      description: '운동복 전용 세탁입니다.',
      nickname: 'lee.hyun',
      user_id: 3,
      capacity: 2,
      participant_user: [2],
      status: '모집중',
      created_at: '2024-08-05T10:00:00',
      machine_id: 3,
      laundry_color: '어두운계열',
      is_dry: true,
      start_time: '2024-08-05T10:40:00',
      end_time: '2024-08-05T11:20:00',
    },
    {
      ticket_id: 4,
      category: '세탁',
      title: '이불 빨래',
      description: '이불만 가능합니다.',
      nickname: 'choi.sung',
      user_id: 4,
      capacity: 1,
      participant_user: [6],
      status: '빨래중',
      created_at: '2024-08-05T11:00:00',
      machine_id: 4,
      laundry_color: '무관',
      is_dry: false,
      start_time: '2024-08-05T11:40:00',
      end_time: '2024-08-05T12:20:00',
    },
    {
      ticket_id: 5,
      category: '세탁',
      title: '색깔 빨래',
      description: '밝은 색 빨래 가능합니다.',
      nickname: 'park.jin',
      user_id: 5,
      capacity: 3,
      participant_user: [9],
      status: '모집중',
      created_at: '2024-08-05T12:00:00',
      machine_id: 5,
      laundry_color: '밝은계열',
      is_dry: true,
      start_time: '2024-08-05T12:40:00',
      end_time: '2024-08-05T13:20:00',
    },
    {
      ticket_id: 6,
      category: '세탁',
      title: '수건 빨래',
      description: '수건만 세탁 가능합니다.',
      nickname: 'jung.woo',
      user_id: 6,
      capacity: 5,
      participant_user: [10, 11],
      status: '빨래중',
      created_at: '2024-08-05T13:00:00',
      machine_id: 6,
      laundry_color: '무관',
      is_dry: false,
      start_time: '2024-08-05T13:40:00',
      end_time: '2024-08-05T14:20:00',
    },
    {
      ticket_id: 7,
      category: '세탁',
      title: '옷장 청소기 세탁',
      description: '옷장 청소기 전용 세탁입니다.',
      nickname: 'han.mira',
      user_id: 7,
      capacity: 2,
      participant_user: [12],
      status: '모집중',
      created_at: '2024-08-05T14:00:00',
      machine_id: 7,
      laundry_color: '무관',
      is_dry: true,
      start_time: '2024-08-05T14:40:00',
      end_time: '2024-08-05T15:20:00',
    },
    {
      ticket_id: 8,
      category: '세탁',
      title: '긴팔 옷 빨래',
      description: '긴팔 옷만 세탁 가능합니다.',
      nickname: 'kang.sohee',
      user_id: 8,
      capacity: 3,
      participant_user: [13, 14],
      status: '빨래중',
      created_at: '2024-08-05T15:00:00',
      machine_id: 8,
      laundry_color: '어두운계열',
      is_dry: false,
      start_time: '2024-08-05T15:40:00',
      end_time: '2024-08-05T16:20:00',
    },
    {
      ticket_id: 9,
      category: '세탁',
      title: '침대 시트 세탁',
      description: '침대 시트 전용 세탁입니다.',
      nickname: 'kim.seung',
      user_id: 9,
      capacity: 1,
      participant_user: [15],
      status: '모집중',
      created_at: '2024-08-05T16:00:00',
      machine_id: 9,
      laundry_color: '무관',
      is_dry: true,
      start_time: '2024-08-05T16:40:00',
      end_time: '2024-08-05T17:20:00',
    },
    {
      ticket_id: 10,
      category: '세탁',
      title: '바지 세탁',
      description: '청바지 세탁만 가능합니다.',
      nickname: 'lee.sun',
      user_id: 10,
      capacity: 2,
      participant_user: [16],
      status: '빨래중',
      created_at: '2024-08-05T17:00:00',
      machine_id: 10,
      laundry_color: '청색계열',
      is_dry: false,
      start_time: '2024-08-05T17:40:00',
      end_time: '2024-08-05T18:20:00',
    },
    {
      ticket_id: 11,
      category: '세탁',
      title: '여름옷 빨래',
      description: '여름옷 전용 세탁입니다.',
      nickname: 'kim.yeon',
      user_id: 11,
      capacity: 4,
      participant_user: [17, 18],
      status: '모집중',
      created_at: '2024-08-05T18:00:00',
      machine_id: 11,
      laundry_color: '밝은계열',
      is_dry: true,
      start_time: '2024-08-05T18:40:00',
      end_time: '2024-08-05T19:20:00',
    },
    {
      ticket_id: 12,
      category: '세탁',
      title: '재킷 세탁',
      description: '재킷만 세탁 가능합니다.',
      nickname: 'choi.hyun',
      user_id: 12,
      capacity: 3,
      participant_user: [19],
      status: '빨래중',
      created_at: '2024-08-05T19:00:00',
      machine_id: 12,
      laundry_color: '어두운계열',
      is_dry: false,
      start_time: '2024-08-05T19:40:00',
      end_time: '2024-08-05T20:20:00',
    },
  ],
}

export const taxiData = {
  tickets: [
    {
      ticket_id: 13,
      category: '택시',
      title: '택시 타실 1인 급구',
      description: '구름 스퀘어 가실 1인 구해요',
      nickname: 'erica.rho',
      user_id: 1,
      created_at: '2024-08-05T07:00:00',
      capacity: 4,
      start_time: '2024-08-05T13:40:00',
      participant_user: [1, 3, 6],
      status: '모집중',
      destination: '구름 스퀘어',
    },
    {
      ticket_id: 14,
      category: '택시',
      title: '택시 타실 1인 급구',
      description: '구름 스퀘어 가실 1인 구해요',
      nickname: 'erica.rho',
      user_id: 1,
      created_at: '2024-08-05T07:00:00',
      start_time: '2024-08-05T13:40:00',
      capacity: 4,
      participant_user: [1, 3],
      status: '마감',
      destination: '구름 스퀘어',
    },
    {
      ticket_id: 15,
      category: '택시',
      title: '공항 가실 분',
      description: '공항까지 가는 택시 타실 분 구합니다.',
      nickname: 'kim.yuna',
      user_id: 2,
      created_at: '2024-08-05T08:00:00',
      capacity: 3,
      start_time: '2024-08-05T13:40:00',
      participant_user: [2],
      status: '모집중',
      destination: '인천 공항',
    },
    {
      ticket_id: 16,
      category: '택시',
      title: '시내로 가실 분',
      description: '시내로 가는 택시 함께 타실 분',
      nickname: 'lee.hyun',
      user_id: 3,
      created_at: '2024-08-05T09:00:00',
      capacity: 4,
      participant_user: [4, 5],
      start_time: '2024-08-05T13:40:00',
      status: '모집중',
      destination: '서울 시내',
    },
    {
      ticket_id: 17,
      category: '택시',
      title: '대학로 가실 분',
      description: '대학로로 가는 택시 구합니다.',
      nickname: 'park.jin',
      user_id: 5,
      created_at: '2024-08-05T10:00:00',
      start_time: '2024-08-05T13:40:00',
      capacity: 4,
      participant_user: [7],
      status: '모집중',
      destination: '대학로',
    },
    {
      ticket_id: 18,
      category: '택시',
      title: '강남역 급구',
      description: '강남역 가실 분 급하게 구합니다.',
      nickname: 'jung.woo',
      user_id: 6,
      created_at: '2024-08-05T11:00:00',
      start_time: '2024-08-05T13:40:00',
      capacity: 4,
      participant_user: [8, 9, 10],
      status: '마감',
      destination: '강남역',
    },
    {
      ticket_id: 19,
      category: '택시',
      title: '코엑스 가실 분',
      description: '코엑스까지 가는 택시 타실 분 구합니다.',
      nickname: 'han.mira',
      user_id: 7,
      created_at: '2024-08-05T12:00:00',
      start_time: '2024-08-05T13:40:00',
      capacity: 4,
      participant_user: [11],
      status: '모집중',
      destination: '코엑스',
    },
    {
      ticket_id: 20,
      category: '택시',
      title: '서울역 가실 분',
      description: '서울역까지 함께 가실 분 구합니다.',
      nickname: 'kang.sohee',
      user_id: 8,
      created_at: '2024-08-05T13:00:00',
      start_time: '2024-08-05T13:40:00',
      capacity: 4,
      participant_user: [12, 13],
      status: '모집중',
      destination: '서울역',
    },
    {
      ticket_id: 21,
      category: '택시',
      title: '홍대 가실 분',
      description: '홍대 가는 택시 타실 분 구해요.',
      nickname: 'kim.seung',
      user_id: 9,
      created_at: '2024-08-05T14:00:00',
      start_time: '2024-08-05T13:40:00',
      capacity: 3,
      participant_user: [14, 15],
      status: '모집중',
      destination: '홍대',
    },
    {
      ticket_id: 22,
      category: '택시',
      title: '명동 가실 분',
      description: '명동까지 가실 분 택시 구합니다.',
      nickname: 'lee.sun',
      user_id: 10,
      created_at: '2024-08-05T15:00:00',
      start_time: '2024-08-05T13:40:00',
      capacity: 4,
      participant_user: [16, 17],
      status: '모집중',
      destination: '명동',
    },
  ],
}

export const gongguData = {
  tickets: [
    {
      ticket_id: 23,
      category: '공구',
      title: '점심에 메가커피 배달시킬분',
      description: '메뉴 선정은 단톡방 팔게요',
      nickname: 'erica.rho',
      user_id: 1,
      created_at: '2024-08-05T07:00:00',
      capacity: 4,
      participant_user: [1, 3, 4],
      status: '모집중',
      destination: '구름 스퀘어',
    },
    {
      ticket_id: 24,
      category: '공구',
      title: '치킨 같이 시킬 분',
      description: '후라이드로 할까요? 단톡방에서 결정해요',
      nickname: 'kim.yuna',
      user_id: 2,
      created_at: '2024-08-05T08:00:00',
      capacity: 4,
      participant_user: [2, 5],
      status: '마감',
      destination: '구름 스퀘어',
    },
    {
      ticket_id: 25,
      category: '공구',
      title: '저녁에 피자 시킬 분',
      description: '피자 종류는 단톡방에서 결정',
      nickname: 'lee.hyun',
      user_id: 3,
      created_at: '2024-08-05T09:00:00',
      capacity: 4,
      participant_user: [6, 7, 8],
      status: '모집중',
      destination: '구름 스퀘어',
    },
    {
      ticket_id: 26,
      category: '공구',
      title: '점심에 메가커피 배달시킬분',
      description: '메뉴 선정은 단톡방 팔게요',
      nickname: 'erica.rho',
      user_id: 1,
      created_at: '2024-08-05T07:00:00',
      capacity: 4,
      participant_user: [1, 3, 4],
      status: '모집중',
      destination: '구름 스퀘어',
    },
    {
      ticket_id: 27,
      category: '공구',
      title: '저녁에 족발 시킬 분',
      description: '매운 족발? 순한 족발? 단톡방에서 결정',
      nickname: 'park.jin',
      user_id: 5,
      created_at: '2024-08-05T10:00:00',
      capacity: 4,
      participant_user: [9, 10, 11],
      status: '마감',
      destination: '구름 스퀘어',
    },
    {
      ticket_id: 28,
      category: '공구',
      title: '브런치 세트 같이 시킬 분',
      description: '메뉴는 단톡방에서 선정해요',
      nickname: 'jung.woo',
      user_id: 6,
      created_at: '2024-08-05T11:00:00',
      capacity: 4,
      participant_user: [12, 13],
      status: '모집중',
      destination: '구름 스퀘어',
    },
    {
      ticket_id: 29,
      category: '공구',
      title: '점심에 메가커피 배달시킬분',
      description: '메뉴 선정은 단톡방 팔게요',
      nickname: 'erica.rho',
      user_id: 1,
      created_at: '2024-08-05T07:00:00',
      capacity: 4,
      participant_user: [1, 3, 4],
      status: '마감',
      destination: '구름 스퀘어',
    },
    {
      ticket_id: 30,
      category: '공구',
      title: '아침에 샌드위치 시킬 분',
      description: '샌드위치 종류는 단톡방에서 결정',
      nickname: 'han.mira',
      user_id: 7,
      created_at: '2024-08-05T12:00:00',
      capacity: 4,
      participant_user: [14],
      status: '모집중',
      destination: '구름 스퀘어',
    },
    {
      ticket_id: 31,
      category: '공구',
      title: '점심에 도시락 시킬 분',
      description: '메뉴는 단톡방에서 결정',
      nickname: 'kang.sohee',
      user_id: 8,
      created_at: '2024-08-05T13:00:00',
      capacity: 4,
      participant_user: [15, 16],
      status: '모집중',
      destination: '구름 스퀘어',
    },
    {
      ticket_id: 32,
      category: '공구',
      title: '빵과 커피 같이 시킬 분',
      description: '메뉴는 단톡방에서 결정',
      nickname: 'kim.seung',
      user_id: 9,
      created_at: '2024-08-05T14:00:00',
      capacity: 4,
      participant_user: [17, 18],
      status: '마감',
      destination: '구름 스퀘어',
    },
    {
      ticket_id: 33,
      category: '공구',
      title: '저녁에 샤브샤브 시킬 분',
      description: '메뉴는 단톡방에서 결정',
      nickname: 'lee.sun',
      user_id: 10,
      created_at: '2024-08-05T15:00:00',
      capacity: 4,
      participant_user: [19, 20, 21],
      status: '모집중',
      destination: '구름 스퀘어',
    },
    {
      ticket_id: 34,
      category: '공구',
      title: '간식으로 아이스크림 시킬 분',
      description: '아이스크림 종류는 단톡방에서 결정',
      nickname: 'choi.hyun',
      user_id: 11,
      created_at: '2024-08-05T16:00:00',
      capacity: 4,
      participant_user: [22, 23],
      status: '마감',
      destination: '구름 스퀘어',
    },
    {
      ticket_id: 35,
      category: '공구',
      title: '점심에 국밥 시킬 분',
      description: '메뉴는 단톡방에서 결정',
      nickname: 'park.sung',
      user_id: 12,
      created_at: '2024-08-05T17:00:00',
      capacity: 4,
      participant_user: [24, 25, 26],
      status: '모집중',
      destination: '구름 스퀘어',
    },
    {
      ticket_id: 36,
      category: '공구',
      title: '브런치 세트 같이 시킬 분',
      description: '메뉴는 단톡방에서 선정해요',
      nickname: 'jung.min',
      user_id: 13,
      created_at: '2024-08-05T18:00:00',
      capacity: 4,
      participant_user: [27, 28],
      status: '모집중',
      destination: '구름 스퀘어',
    },
    {
      ticket_id: 37,
      category: '공구',
      title: '디저트 세트 같이 시킬 분',
      description: '디저트 종류는 단톡방에서 선정해요',
      nickname: 'kim.woo',
      user_id: 14,
      created_at: '2024-08-05T19:00:00',
      capacity: 4,
      participant_user: [29, 30],
      status: '마감',
      destination: '구름 스퀘어',
    },
  ],
}

// 기존 데이터를 병합하고 섞는 함수
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// 데이터를 하나의 배열로 병합
const combinedTickets = [
  ...laundryData.tickets,
  ...taxiData.tickets,
  ...gongguData.tickets,
]

// 배열을 섞음
const shuffledTickets = shuffleArray(combinedTickets)

// 최종 allData 객체 생성
export const allData = {
  tickets: shuffledTickets,
}

export const tripData = {
  places: [
    {
      place_id: 1,
      title: '성산 일출봉',
      address: '제주특별자치도 서귀포시 성산읍 일출로 284-12',
      thumbnail_url: 'https://api.cdn.visitjeju~~',
      tag: '일출, 오름, 경관/포토',
      section: 3,
    },
    {
      place_id: 2,
      title: '한라산 국립공원',
      address: '제주특별자치도 제주시 1100로 2070-61',
      thumbnail_url: 'https://api.cdn.visitjeju~~',
      tag: '등산, 국립공원, 경관/포토',
      section: 5,
    },
    {
      place_id: 3,
      title: '섭지코지',
      address: '제주특별자치도 서귀포시 성산읍 섭지코지로 107',
      thumbnail_url: 'https://api.cdn.visitjeju~~',
      tag: '해안, 드라이브, 경관/포토',
      section: 2,
    },
    {
      place_id: 4,
      title: '천지연 폭포',
      address: '제주특별자치도 서귀포시 천지연폭포로 132',
      thumbnail_url: 'https://api.cdn.visitjeju~~',
      tag: '폭포, 자연경관, 경관/포토',
      section: 4,
    },
    {
      place_id: 5,
      title: '제주 동문 시장',
      address: '제주특별자치도 제주시 관덕로14길 20',
      thumbnail_url: 'https://api.cdn.visitjeju~~',
      tag: '전통시장, 쇼핑, 먹거리',
      section: 1,
    },
    {
      place_id: 6,
      title: '협재 해수욕장',
      address: '제주특별자치도 제주시 한림읍 협재리 2497-1',
      thumbnail_url: 'https://api.cdn.visitjeju~~',
      tag: '해수욕장, 해변, 경관/포토',
      section: 6,
    },
    {
      place_id: 7,
      title: '비자림',
      address: '제주특별자치도 제주시 구좌읍 비자림로 55',
      thumbnail_url: 'https://api.cdn.visitjeju~~',
      tag: '삼림욕, 자연경관, 경관/포토',
      section: 2,
    },
    {
      place_id: 8,
      title: '용두암',
      address: '제주특별자치도 제주시 용담이동 용두암길',
      thumbnail_url: 'https://api.cdn.visitjeju~~',
      tag: '바위, 자연경관, 경관/포토',
      section: 4,
    },
    {
      place_id: 9,
      title: '우도',
      address: '제주특별자치도 제주시 우도면',
      thumbnail_url: 'https://api.cdn.visitjeju~~',
      tag: '섬, 경관/포토, 자전거',
      section: 3,
    },
    {
      place_id: 10,
      title: '제주 민속촌',
      address: '제주특별자치도 서귀포시 표선면 민속해안로 631-34',
      thumbnail_url: 'https://api.cdn.visitjeju~~',
      tag: '민속촌, 역사, 문화',
      section: 5,
    },
  ],
}

const myData = {
  tickets: [
    // 세탁 데이터
    {
      ticket_id: 1,
      category: '세탁',
      title: '운동복 세탁',
      description: '운동복 전용 세탁입니다.',
      nickname: 'user_20',
      user_id: 20,
      capacity: 2,
      participant_user: [20, 2, 4],
      status: '모집중',
      created_at: '2024-08-05T10:00:00',
      machine_id: 3,
      laundry_color: '어두운계열',
      is_dry: true,
      start_time: '2024-08-05T10:40:00',
      end_time: '2024-08-05T11:20:00',
    },
    {
      ticket_id: 2,
      category: '세탁',
      title: '이불 세탁',
      description: '이불만 세탁 가능합니다.',
      nickname: 'lee.hyun',
      user_id: 3,
      capacity: 3,
      participant_user: [3, 20],
      status: '모집중',
      created_at: '2024-08-05T11:00:00',
      machine_id: 5,
      laundry_color: '무관',
      is_dry: false,
      start_time: '2024-08-05T11:40:00',
      end_time: '2024-08-05T12:20:00',
    },
    {
      ticket_id: 3,
      category: '세탁',
      title: '흰빨래 1명 구합니다',
      description: '흰색 계열의 빨래만 가능합니다.',
      nickname: 'park.jin',
      user_id: 5,
      capacity: 4,
      participant_user: [5, 10, 20],
      status: '모집중',
      created_at: '2024-08-05T07:00:00',
      machine_id: 7,
      laundry_color: '흰색계열',
      is_dry: true,
      start_time: '2024-08-05T07:40:00',
      end_time: '2024-08-05T08:20:00',
    },
    {
      ticket_id: 4,
      category: '세탁',
      title: '색깔 빨래',
      description: '밝은 색 빨래 가능합니다.',
      nickname: 'kang.sohee',
      user_id: 8,
      capacity: 3,
      participant_user: [8, 9, 20],
      status: '모집중',
      created_at: '2024-08-05T12:00:00',
      machine_id: 9,
      laundry_color: '밝은계열',
      is_dry: true,
      start_time: '2024-08-05T12:40:00',
      end_time: '2024-08-05T13:20:00',
    },
    {
      ticket_id: 5,
      category: '세탁',
      title: '수건 빨래',
      description: '수건만 세탁 가능합니다.',
      nickname: 'jung.woo',
      user_id: 6,
      capacity: 5,
      participant_user: [6, 10, 11, 20],
      status: '빨래중',
      created_at: '2024-08-05T13:00:00',
      machine_id: 6,
      laundry_color: '무관',
      is_dry: false,
      start_time: '2024-08-05T13:40:00',
      end_time: '2024-08-05T14:20:00',
    },

    // 택시 데이터
    {
      ticket_id: 6,
      category: '택시',
      title: '공항 가실 분',
      description: '공항까지 가는 택시 타실 분 구합니다.',
      nickname: 'user_20',
      user_id: 20,
      created_at: '2024-08-05T08:00:00',
      capacity: 3,
      start_time: '2024-08-05T13:40:00',
      participant_user: [20, 5],
      status: '모집중',
      destination: '인천 공항',
    },
    {
      ticket_id: 7,
      category: '택시',
      title: '시내로 가실 분',
      description: '시내로 가는 택시 함께 타실 분',
      nickname: 'lee.hyun',
      user_id: 3,
      created_at: '2024-08-05T09:00:00',
      capacity: 4,
      participant_user: [3, 4, 20],
      start_time: '2024-08-05T13:40:00',
      status: '모집중',
      destination: '서울 시내',
    },
    {
      ticket_id: 8,
      category: '택시',
      title: '대학로 가실 분',
      description: '대학로로 가는 택시 구합니다.',
      nickname: 'park.jin',
      user_id: 5,
      created_at: '2024-08-05T10:00:00',
      start_time: '2024-08-05T13:40:00',
      capacity: 4,
      participant_user: [5, 7, 20],
      status: '모집중',
      destination: '대학로',
    },
    {
      ticket_id: 9,
      category: '택시',
      title: '홍대 가실 분',
      description: '홍대 가는 택시 타실 분 구해요.',
      nickname: 'kim.seung',
      user_id: 9,
      created_at: '2024-08-05T14:00:00',
      start_time: '2024-08-05T13:40:00',
      capacity: 3,
      participant_user: [9, 14, 20],
      status: '모집중',
      destination: '홍대',
    },
    {
      ticket_id: 10,
      category: '택시',
      title: '명동 가실 분',
      description: '명동까지 가실 분 택시 구합니다.',
      nickname: 'lee.sun',
      user_id: 10,
      created_at: '2024-08-05T15:00:00',
      start_time: '2024-08-05T13:40:00',
      capacity: 4,
      participant_user: [10, 16, 17, 20],
      status: '모집중',
      destination: '명동',
    },

    // 공구 데이터
    {
      ticket_id: 11,
      category: '공구',
      title: '저녁에 피자 시킬 분',
      description: '피자 종류는 단톡방에서 결정',
      nickname: 'user_20',
      user_id: 20,
      created_at: '2024-08-05T09:00:00',
      capacity: 4,
      participant_user: [20, 3, 6],
      status: '모집중',
      destination: '구름 스퀘어',
    },
    {
      ticket_id: 12,
      category: '공구',
      title: '저녁에 족발 시킬 분',
      description: '매운 족발? 순한 족발? 단톡방에서 결정',
      nickname: 'park.jin',
      user_id: 5,
      created_at: '2024-08-05T10:00:00',
      capacity: 4,
      participant_user: [5, 9, 10, 20],
      status: '마감',
      destination: '구름 스퀘어',
    },
    {
      ticket_id: 13,
      category: '공구',
      title: '브런치 세트 같이 시킬 분',
      description: '메뉴는 단톡방에서 선정해요',
      nickname: 'jung.woo',
      user_id: 6,
      created_at: '2024-08-05T11:00:00',
      capacity: 4,
      participant_user: [6, 12, 13, 20],
      status: '모집중',
      destination: '구름 스퀘어',
    },
    {
      ticket_id: 14,
      category: '공구',
      title: '아침에 샌드위치 시킬 분',
      description: '샌드위치 종류는 단톡방에서 결정',
      nickname: 'han.mira',
      user_id: 7,
      created_at: '2024-08-05T12:00:00',
      capacity: 4,
      participant_user: [7, 14, 20],
      status: '모집중',
      destination: '구름 스퀘어',
    },
    {
      ticket_id: 15,
      category: '공구',
      title: '점심에 도시락 시킬 분',
      description: '메뉴는 단톡방에서 결정',
      nickname: 'kang.sohee',
      user_id: 8,
      created_at: '2024-08-05T13:00:00',
      capacity: 4,
      participant_user: [8, 15, 20],
      status: '모집중',
      destination: '구름 스퀘어',
    },
  ],
}
