import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface TextAreaProps extends React.ComponentProps<typeof TextInput> {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  numberOfLines?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChangeText,
  placeholder = "Others",
  numberOfLines = 4,
  ...otherProps
}) => {
  return (
    <TextInput
      className="border-primary border-2 rounded-lg p-4"
      style={styles.textArea}
      multiline
      numberOfLines={numberOfLines}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  textArea: {
    marginVertical: 8,
    height: 160,
  },
});

export default TextArea;
