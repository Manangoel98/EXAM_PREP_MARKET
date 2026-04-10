/**
 * Shared hook for all topic-related actions
 * Reused across MistakeAnalysis, Dashboard, AttemptReport, etc.
 * Single source of truth for navigation and actions
 */

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { API_BASE_URL } from '../api';

async function getAuthHeaders() {
  const { auth } = await import('../firebase');
  const idToken = await auth.currentUser?.getIdToken(true);

  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${idToken}`
  };
}

export function useTopicActions(examName: string) {
  const router = useRouter();

  /**
   * Navigate to topic practice page
   */
  const practiceTopic = useCallback((topic: string, subject: string) => {
    const examType = examName.toLowerCase();
    router.push(
      `/practice/${examType}/topic-practice?topic=${encodeURIComponent(topic)}&subject=${encodeURIComponent(subject)}`
    );
  }, [examName, router]);

  /**
   * Navigate to NomoAI with pre-filled context
   */
  const askAI = useCallback((topic: string, context?: string) => {
    const defaultMessage = `I'm struggling with ${topic}. I made several mistakes on this topic in my recent exam. Can you help me understand where I'm going wrong and how to improve?`;
    const message = context || defaultMessage;

    router.push(`/nomoai?message=${encodeURIComponent(message)}`);
  }, [router]);

  /**
   * Add topic to study plan
   */
  const addToStudyPlan = useCallback(async (topic: string, subject: string) => {
    try {
      const headers = await getAuthHeaders();

      const response = await fetch(`${API_BASE_URL}/students/study-plan/add-task`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          exam_name: examName,
          topic,
          subject
        })
      });

      if (!response.ok) {
        throw new Error('Failed to add to study plan');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }, [examName]);

  /**
   * Start a specific practice paper
   */
  const startPaper = useCallback((paperId: string) => {
    const examType = examName.toLowerCase();
    router.push(`/practice/${examType}/exam/${paperId}`);
  }, [examName, router]);

  return {
    practiceTopic,
    askAI,
    addToStudyPlan,
    startPaper
  };
}
