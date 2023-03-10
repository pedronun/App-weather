import BottomSheet, { BottomSheetHandleProps } from "@gorhom/bottom-sheet";
import React, { useRef, useMemo } from "react";
import { Text, View } from "react-native";
import { Container } from "./BottomModal.styles";

const BottomModal = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["22%", "34%"], []);

  return (
    <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints} backgroundStyle={{ backgroundColor: '#1C1B3342' }}>
      <Container>
        <Text>Awesome 🎉</Text>
      </Container>
    </BottomSheet>
  );
};

export default BottomModal;
