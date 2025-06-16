// src/app/page.tsx
'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setArtworks, setLoading } from '@/store/slices/artworkSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// ダミーデータ
const mockArtworks = [
  {
    id: '1',
    title: '夕焼けの詩',
    description: '美しい夕焼けをモチーフにした抽象デジタルアート作品',
    imageUrl: '/api/placeholder/400/300',
    price: 15000,
    artist: '山田太郎',
    category: 'abstract',
    createdAt: '2024-01-15',
    tags: ['夕焼け', '抽象画', 'デジタル'],
  },
  {
    id: '2',
    title: '都市の夜景',
    description: 'ネオンが輝く都市の夜景を幻想的に表現',
    imageUrl: '/api/placeholder/400/300',
    price: 25000,
    artist: '佐藤花子',
    category: 'landscape',
    createdAt: '2024-01-20',
    tags: ['夜景', '都市', 'ネオン'],
  },
  {
    id: '3',
    title: '森の静寂',
    description: '深い森の中の静寂な瞬間を切り取った作品',
    imageUrl: '/api/placeholder/400/300',
    price: 18000,
    artist: '田中次郎',
    category: 'nature',
    createdAt: '2024-01-25',
    tags: ['森', '自然', '静寂'],
  },
];

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { artworks, loading } = useAppSelector((state) => state.artwork);

  useEffect(() => {
    // ダミーデータを読み込み
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setArtworks(mockArtworks));
    }, 500); // 読み込み感を演出
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">作品を読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">Gallery</h1>
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">ホーム</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">作品一覧</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">アーティスト</a>
            </nav>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ヒーローセクション */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            デジタルアートマーケットプレイス
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            才能あるアーティストのオリジナル作品を発見しよう
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            作品を探す
          </Button>
        </section>

        {/* 作品グリッド */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">注目の作品</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((artwork) => (
              <Card key={artwork.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-t-lg overflow-hidden">
                  <img
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{artwork.title}</CardTitle>
                    <Badge variant="secondary">{artwork.category}</Badge>
                  </div>
                  <CardDescription className="text-sm text-gray-600">
                    by {artwork.artist}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                    {artwork.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-blue-600">
                      ¥{artwork.price.toLocaleString()}
                    </span>
                    <Button size="sm" variant="outline">
                      詳細を見る
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {artwork.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Gallery</h3>
            <p className="text-gray-400">
              © 2024 Gallery. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}