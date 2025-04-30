const doctorMockData = {
  "1": {
    id: '1',
    CODE: '13877',
    NAME_ENG: 'Dr. John Doe',
    NAME_THAI: 'ดร. จอห์น โด',
    EMPLOYEE_ID: 'EMP001',
    TELEPHONE: '123-456-7890',
    LICENSE_ID: 'LIC12345',
    BIRTH_DATE: '1985-07-28',
    ACTIVE: '1',
    NATION_ID: '1234567890123',
    HOSPITAL_CODE: 'DEMO',
  },
  "2": {
    id: '2',
    CODE: '13878',
    NAME_ENG: 'Dr. Jane Smith',
    NAME_THAI: 'ดร. เจน สมิธ',
    EMPLOYEE_ID: 'EMP002',
    TELEPHONE: '987-654-3210',
    LICENSE_ID: 'LIC67890',
    BIRTH_DATE: '1990-05-15',
    ACTIVE: '1',
    NATION_ID: '9876543210987',
    HOSPITAL_CODE: 'DEMO',
  }
};

export const getDoctorProfile = async (doctorCode) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const doctor = doctorMockData[doctorCode];
      if (doctor) {
        resolve({
          DOCTOR_PROFILE_DETAIL: doctor,
          DATATABLE: [
            {
              CODE: doctor.CODE,
              NAME_ENG: doctor.NAME_ENG,
              DOCTOR_CATEGORY_CODE: 'CARDIO',
              ACTIVE: doctor.ACTIVE,
            },
          ],
        });
      } else {
        reject(new Error('Doctor not found'));
      }
    }, 500);
  });
};

export const updateDoctorProfile = async (updatedData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!updatedData?.CODE) {
        return reject(new Error('Doctor CODE is required to update'));
      }
      doctorMockData[updatedData.CODE] = updatedData;
      resolve(updatedData);
    }, 500);
  });
};

export const getAllDoctors = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allDoctors = Object.values(doctorMockData);
      resolve({
        DATATABLE: allDoctors.map(doctor => ({
          CODE: doctor.CODE,
          NAME_ENG: doctor.NAME_ENG,
          DOCTOR_CATEGORY_CODE: 'CARDIO',
          ACTIVE: doctor.ACTIVE,
        })),
      });
    }, 500);
  });
};
