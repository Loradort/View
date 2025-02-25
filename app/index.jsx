import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            {/* Section: ประวัติส่วนตัว */}
            <View style={[styles.section, { backgroundColor: '#D0F0C0' }]}>
                <Text style={styles.sectionTitle}>ประวัติส่วนตัว</Text>
                <Text style={styles.infoText}>นาย ปวฤทธิ์ จิตหาญ</Text>
                <Text style={styles.infoText}>อาศัยอยู่ ตำบลกระโพ อำเภอท่าตูม จังหวัดสุรินทร์</Text>
            </View>

            {/* Section: ประวัติการศึกษา */}
            <View style={[styles.section, { backgroundColor: '#B0E0E6' }]}>
                <Text style={styles.sectionTitle}>ประวัติการศึกษา</Text>
                <Text style={styles.infoText}>ประถมศึกษา: โรงเรียนบ้านกระโพ</Text>
                <Text style={styles.infoText}>มัธยมศึกษาตอนต้น: โรงเรียนบ้านกระโพ</Text>
                <Text style={styles.infoText}>มัธยมศึกษาตอนปลาย: จอมพระประชาสรรค์</Text>
            </View>

            {/* Section: งานอดิเรก */}
            <View style={[styles.section, { backgroundColor: '#FFDDC1' }]}>
                <Text style={styles.sectionTitle}>งานอดิเรก</Text>
                <Text style={styles.infoText}>- วาดรูป</Text>
                <Text style={styles.infoText}>- อ่านหนังสือ</Text>
                <Text style={styles.infoText}>- ออกกำลังกาย</Text>
                <Text style={styles.infoText}>- ฟังเพลง</Text>
                <Text style={styles.infoText}>- ทำอาหาร</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
    section: {
        marginBottom: 20,
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 8,
    },
    infoText: {
        fontSize: 16,
        color: '#333333',
        marginBottom: 4,
    },
});
