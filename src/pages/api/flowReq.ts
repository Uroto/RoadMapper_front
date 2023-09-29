export const flowReq = async (url:string, word: string, level: string, time: string) => {
    try {
      const base_url = new URL(url);
      base_url.searchParams.set('word', word);
      base_url.searchParams.set('level', level);
      base_url.searchParams.set('time', time);
      const res = await fetch(base_url.toString(), {
        method: 'GET',
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
};