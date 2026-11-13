/** Usuários de teste fornecidos pela própria aplicação Sauce Demo. */
export const PASSWORD = 'secret_sauce';

export const USERS = {
  standard: { username: 'standard_user', password: PASSWORD },
  locked: { username: 'locked_out_user', password: PASSWORD },
  problem: { username: 'problem_user', password: PASSWORD },
  glitch: { username: 'performance_glitch_user', password: PASSWORD },
} as const;
