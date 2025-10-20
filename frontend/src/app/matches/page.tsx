import { Layout } from '@/components/layout/Layout';
import { strapi } from '@/lib/strapi';
import { Card } from '@/components/ui/Card';

export default async function MatchesPage() {
  // Fetch all matches
  const matchesResponse = await strapi.getMatches({
    pagination: { page: 1, pageSize: 20 },
  }).catch(() => ({ 
    data: [], 
    meta: { pagination: { page: 1, pageSize: 20, pageCount: 0, total: 0 } } 
  }));

  const matches = matchesResponse.data || [];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Matches & Fixtures
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow all the matches, results, and upcoming fixtures for Sport Clube Borbense.
          </p>
        </div>

        {matches.length > 0 ? (
          <div className="space-y-6">
            {matches.map((match) => (
              <Card key={match.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-center flex-1">
                        <h3 className="font-semibold text-lg">
                          {match.attributes.homeTeam}
                        </h3>
                      </div>
                      <div className="mx-4 text-center">
                        <span className="text-2xl font-bold">
                          {match.attributes.homeScore !== null && match.attributes.awayScore !== null
                            ? `${match.attributes.homeScore} - ${match.attributes.awayScore}`
                            : 'vs'
                          }
                        </span>
                      </div>
                      <div className="text-center flex-1">
                        <h3 className="font-semibold text-lg">
                          {match.attributes.awayTeam}
                        </h3>
                      </div>
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                      <p>{strapi.formatDate(match.attributes.matchDate)}</p>
                      {match.attributes.venue && (
                        <p>{match.attributes.venue}</p>
                      )}
                      {match.attributes.competition && (
                        <p className="font-medium">{match.attributes.competition}</p>
                      )}
                    </div>
                  </div>
                  <div className="ml-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      match.attributes.status === 'upcoming' 
                        ? 'bg-blue-100 text-blue-800' 
                        : match.attributes.status === 'live'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {match.attributes.status}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-muted-foreground mb-4">
              No matches scheduled yet
            </h2>
            <p className="text-muted-foreground">
              Match information will be available soon.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}
