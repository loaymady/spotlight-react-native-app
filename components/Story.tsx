import { styles } from "@/styles/feed.styles";
import { View, Text, Image, TouchableOpacity } from "react-native";

type Story = {
  id: string;
  username: string;
  avatar: string;
  hasStory: boolean;
};

export default function Story({ story }: { story: Story }) {
  return (
    <TouchableOpacity style={styles.storyWrapper} activeOpacity={0.8}>
      <View style={[styles.storyRing, !story.hasStory && styles.noStory]}>
        <Image source={{ uri: story.avatar }} style={styles.storyAvatar} />
      </View>
      <Text style={styles.storyUsername}>{story.username}</Text>
    </TouchableOpacity>
  );
}