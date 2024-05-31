import { useState } from 'react';

export const useFormModel = () => {
  const [formData, setFormData] = useState({
    basicInfo: {
      name: '',
      birthday: '',
      address: '',
      email: '',
      phone: '',
      height: '',
      weight: '',
    },
    medicalHistory: {
      drinkAlcohol: false,
      alcoholFrequency: '',
      smoke: false,
      smokeFrequency: '',
      bloodType: '',
      previousConditions: '',
    },
    familyRelations: [],
  });

  const updateBasicInfo = (info) => {
    setFormData({ ...formData, basicInfo: { ...formData.basicInfo, ...info } });
  };

  const updateMedicalHistory = (history) => {
    setFormData({
      ...formData,
      medicalHistory: { ...formData.medicalHistory, ...history },
    });
  };

  const addFamilyRelation = (relation) => {
    setFormData({
      ...formData,
      familyRelations: [...formData.familyRelations, relation],
    });
  };

  const resetForm = () => {
    setFormData({
      basicInfo: {
        name: '',
        birthday: '',
        address: '',
        email: '',
        phone: '',
        height: '',
        weight: '',
      },
      medicalHistory: {
        drinkAlcohol: false,
        alcoholFrequency: '',
        smoke: false,
        smokeFrequency: '',
        bloodType: '',
        previousConditions: '',
      },
      familyRelations: [],
    });
  };

  return {
    formData,
    updateBasicInfo,
    updateMedicalHistory,
    addFamilyRelation,
    resetForm,
  };
};
