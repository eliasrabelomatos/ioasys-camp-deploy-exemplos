import { Injectable } from '@nestjs/common';

@Injectable()
export class GetService {
  async execute(): Promise<{ quote: string }> {
    const quotes = ['ih ala', 'meteu essa?', 'aceitas pix?', 'nerdola'];
    return { quote: quotes[Math.floor(Math.random() * 4)] };
  }
}
