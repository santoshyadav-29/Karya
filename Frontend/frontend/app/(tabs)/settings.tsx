import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const AboutUs = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{uri: 'https://example.com/your-logo.png'}} // Replace with your logo URL
          style={styles.logo} 
        />
        <Text style={styles.title}>About Us</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.paragraph}>
          Welcome to our company! We are dedicated to providing the best service possible. 
          Our team is comprised of industry experts who are passionate about what they do.
        </Text>
        <Text style={styles.paragraph}>
          Our mission is to deliver high-quality products that improve the lives of our customers. 
          We believe in innovation, integrity, and customer satisfaction.
        </Text>
        <Text style={styles.paragraph}>
          Since our founding, we have grown significantly and continue to expand our reach. 
          Thank you for being a part of our journey.
        </Text>
        <Image 
          source={{uri: 'https://example.com/team-photo.jpg'}} // Replace with your team photo URL
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  content: {
    padding: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default AboutUs;
