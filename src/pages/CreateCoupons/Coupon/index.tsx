import React from 'react'
import { View } from 'react-native';
import styles from './styles';

interface CouponProps {
  currentPoints: number
  code: string
  money: string
}

const Coupon: React.FC<CouponProps> = ( {currentPoints, code, money} ) => {
  return (
    <View>

    </View>
  );
}

export default Coupon;