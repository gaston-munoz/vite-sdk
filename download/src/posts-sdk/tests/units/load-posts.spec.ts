import { test, vi, expect } from 'vitest';
import { IPost } from '../../types';
import { HttpAdapter } from '../../http-adapter';
import { getPosts } from '../../load-posts';

test('Getting all posts', async () => {
    const mockPosts: IPost[] = [
        {
            id: 1,
            userId: 1,
            body: 'mock body',
            title: 'mock title',
        },
        {
            id: 2,
            userId: 2,
            body: 'mock body',
            title: 'mock title',
        }
    ];

    const mockGet = vi.fn().mockResolvedValue(mockPosts);

    vi.mock('../../http-adatper.ts', () => {
        return {
            HttpAdapter: vi.fn().mockImplementation(() => {
                return {
                    get: mockGet
                }
            })
        }
    });


    const posts = await getPosts();

    expect(mockGet).toHaveBeenCalledWith('/posts');

    expect(posts).toEqual(mockPosts);


});