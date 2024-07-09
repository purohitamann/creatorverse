import { createClient } from "@supabase/supabase-js";

const URL = "https://tinwcbhvaklecussydua.supabase.co";
const API =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpbndjYmh2YWtsZWN1c3N5ZHVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyODEwMjksImV4cCI6MjAzNTg1NzAyOX0.F2ggA-qGrrHrIG56Hzgcd4Hsyh3gggaxKibPnzH1GX4";
export const supabase = createClient(URL, API);

export async function addItem(item) {
  const yt = item.youtube;
  const inst = item.instagram;
  const tw = item.twitter;
  const url = [yt, inst, tw];
  const { data, error } = await supabase
    .from("creators")
    .upsert({
      name: item.name,
      imageURL: item.imageUrl,
      description: item.description,
      url: url,
    })
    .select();
  if (error) {
    console.error("Error inserting item: ", error);
    return null;
  }

  return data;
}

export async function showAllCreators() {
  let { data: creators, error } = await supabase.from("creators").select("*");
  if (error) {
    console.error("Error fetching creators: ", error);
    return null;
  }
  return creators;
}

export async function getCreatorById(id) {
  let { data: creator, error } = await supabase
    .from("creators")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error("Error fetching creator: ", error);
    return null;
  }
  return creator;
}

export async function updateCreator(id, item) {
  const yt = item.youtube;
  const inst = item.instagram;
  const tw = item.twitter;
  const url = [yt, inst, tw];
  const { data, error } = await supabase
    .from("creators")
    .update({
      name: item.name,
      imageURL: item.imageUrl,
      description: item.description,
      url: url,
    })
    .eq("id", id)
    .select();

  if (error) {
    console.error("Error updating creator: ", error);
    return null;
  }
  return data;
}

export async function deleteCreator(id) {
  const { data: creator, error } = await supabase
    .from("creators")
    .delete()
    .eq("id", id);
  if (error) {
    console.error("Error fetching creator: ", error);
    return null;
  }
  return creator;
}
