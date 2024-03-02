import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Salon Tóc XYZ</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Image
            source={require('./assets/profile-icon.png')}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.banner}>
        <Image
          source={require('./assets/banner-image.png')}
          style={styles.bannerImage}
          resizeMode="cover"
        />
        <Text style={styles.bannerText}>Chào mừng đến với Salon Tóc </Text>
      </View>
      <View style={styles.services}>
        <Text style={styles.servicesTitle}>Dịch vụ</Text>
        <View style={styles.servicesContainer}>
          {/* Hiển thị danh sách các dịch vụ */}
          {/* Ví dụ: */}
          <TouchableOpacity style={styles.serviceItem}>
            <Image
              source={require('./assets/haircut-icon.png')}
              style={styles.serviceIcon}
            />
            <Text style={styles.serviceName}>Cắt tóc</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem}>
            <Image
              source={require('./assets/color-icon.png')}
              style={styles.serviceIcon}
            />
            <Text style={styles.serviceName}>Nhuộm tóc</Text>
          </TouchableOpacity>
          {/* ... */}
        </View>
      </View>
      {/* Các phần còn lại của màn hình */}
      {/* Ví dụ: Bài viết, Khuyến mãi, Đánh giá từ khách hàng, v.v. */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileButton: {
    padding: 10,
  },
  profileIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  banner: {
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: 200,
  },
  bannerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
  services: {
    marginTop: 20,
  },
  servicesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceItem: {
    alignItems: 'center',
  },
  serviceIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  serviceName: {
    marginTop: 5,
    fontSize: 16,
  },

});

export default HomeScreen;
