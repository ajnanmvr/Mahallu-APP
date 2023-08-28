import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import InputField from '../components/InputField';
import Title from '../components/Title';

import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import {useTheme} from '../hooks/ThemeProvider'; // Import the theme hook

const AcademicStages = [
  'LKG',
  'UKG',
  'Class 1',
  'Class 2',
  'Class 3',
  'Class 4',
  'Class 5',
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10',
  'Class 11',
  'Class 12',
  'Undergraduate',
  'Postgraduate',
  'Doctorate',
];

const GenderOptions = ['Male', 'Female'];

const Form = () => {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    academicStage: '',
    contactNumber: '',
    gender: 'male',
    age: '',
    mobileNumber: '',
    maritalStatus: '',
    educationalQualification: '',
    institutionOfStudy: '',
    religiousEducation: '',
    materialEducation: '',
    jobDetails: '',
    health: '',
    bloodGroup: '',
    jobType: '',
  });

  const handleInputChange = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Submitted:', formData);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title>Personal Information</Title>

      <View style={styles.input}>
        <Text style={styles.label}>Name</Text>
        <InputField
          value={formData.name}
          onChangeText={value => handleInputChange('name', value)}
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.label}>Contact Number</Text>
        <InputField
          value={formData.contactNumber}
          onChangeText={value => handleInputChange('contactNumber', value)}
        />
      </View>

      <View style={styles.input}>
        <Text style={styles.label}>Age</Text>
        <InputField
          value={formData.age}
          onChangeText={value => handleInputChange('age', value)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.label}>Mobile Number</Text>
        <InputField
          value={formData.mobileNumber}
          onChangeText={value => handleInputChange('mobileNumber', value)}
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.label}>Marital Status</Text>
        <InputField
          value={formData.maritalStatus}
          onChangeText={value => handleInputChange('maritalStatus', value)}
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.label}>Educational Qualification</Text>
        <InputField
          value={formData.educationalQualification}
          onChangeText={value =>
            handleInputChange('educationalQualification', value)
          }
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.label}>Institution of Study</Text>
        <InputField
          value={formData.institutionOfStudy}
          onChangeText={value => handleInputChange('institutionOfStudy', value)}
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.label}>Religious Education</Text>
        <InputField
          value={formData.religiousEducation}
          onChangeText={value => handleInputChange('religiousEducation', value)}
        />
      </View>
      <Dropdown
        selectedValue={formData.gender}
        onValueChange={value => handleInputChange('gender', value)}
        label="Gender"
        options={GenderOptions}
      />
      <Dropdown
        selectedValue={formData.bloodGroup}
        onValueChange={value => handleInputChange('bloodGroup', value)}
        label="Blood Group"
        options={['A', 'B', 'AB', 'O']}
      />
      <Dropdown
        selectedValue={formData.academicStage}
        onValueChange={value => handleInputChange('academicStage', value)}
        label="Academic Stage"
        options={AcademicStages}
      />
      <Dropdown
        selectedValue={formData.jobType}
        onValueChange={value => handleInputChange('jobType', value)}
        label="Job Type"
        options={['Government Service', 'Private Sector', 'Daily Wage']}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    marginVertical: 10,
  },
});
export default Form;
