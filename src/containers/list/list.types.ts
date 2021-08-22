export type Character = {
  char_id: string,
  name: string,
  birthday: string,
  occupation: string[],
  img: string,
  status: Status,
  appearance: number[],
  nickname: string,
  portrayed: string,
  better_call_saul_appearance: number[]
}

export type Status = 'Deceased' | "Presumed dead" | "Alive" | 'Unknown'