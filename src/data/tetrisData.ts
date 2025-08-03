import type { DifficultyLevel } from '../types';

/**
 * 俄羅斯方塊模式單字數據
 * 
 * 使用修復版本的詞彙系統
 * 總單字數: 7,658 個
 */

export interface TetrisWord {
  word: string;
  kana: string;
  meaning: string;
  difficulty: DifficultyLevel;
  category: string;
  kanji?: string; // 漢字版本（可選）
  isKanji?: boolean; // 是否為漢字方塊
}

// 導入完整的詞彙系統（使用修復版本）
import {
  getWordsByDifficulty,
  getRandomWordImproved,
  getWordByLength,
  getWordByLevelAndLength,
  getWordsByType,
  getAllCategories,
  getWordsByCategory,
  BEGINNER_WORDS,
  NORMAL_WORDS,
  HARD_WORDS,
  EXPERT_WORDS,
  KANJI_WORDS
} from './vocabulary-final/index 2';

// 為了向後兼容，保留舊的導出名稱
export const INTERMEDIATE_WORDS = NORMAL_WORDS;
export const ADVANCED_WORDS = HARD_WORDS;
export const KANJI_2_WORDS = KANJI_WORDS;
export const KANJI_3_WORDS = KANJI_WORDS;

// 重新導出所有函數
export {
  getWordsByDifficulty,
  getRandomWordImproved,
  getWordByLength,
  getWordByLevelAndLength,
  getWordsByType,
  getAllCategories,
  getWordsByCategory
}; 