import React from 'react'
import { Text, View } from 'react-native';
import styles from './styles';

export interface Coupon {
  code: string
  points: string
  remainedPoints: string
  value: string
  status: string
  date: string
  account_id: string
}

interface CouponProps {
  coupon: Coupon
}

const CouponItem: React.FC<CouponProps> = ( {coupon} ) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.pointsText]}>Pontos restantes:  {coupon.remainedPoints}</Text>
      <View style={styles.codeContainer}>
        <Text style={styles.text}>Este é o seu cupom</Text>
        <Text style={styles.codeText}>{coupon.code}</Text>
      </View>
      <Text style={styles.text}>Pontos consumidos:  {coupon.points}</Text>
      <Text style={styles.text}>Valor do desconto:  {coupon.value}</Text>
      <Text style={styles.text}>Criação:  {coupon.date}</Text>
    </View>
  );
}

export default CouponItem;