import { Layout } from '@/components/layout/Layout';
import { strapi } from '@/lib/strapi';
import { Card } from '@/components/ui/Card';

export default async function PlayersPage() {
  // Fetch all players
  const playersResponse = await strapi.getActivePlayers().catch(() => ({ 
    data: [], 
    meta: { pagination: { page: 1, pageSize: 20, pageCount: 0, total: 0 } } 
  }));

  const players = playersResponse.data || [];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Our Players
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the talented players who represent Sport Clube Borbense on the field.
          </p>
        </div>

        {players.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {players.map((player) => (
              <Card key={player.id} className="text-center">
                <div className="aspect-square w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  {player.attributes.photo ? (
                    <img
                      src={strapi.getMediaUrl(player.attributes.photo)}
                      alt={player.attributes.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <span className="text-2xl font-bold">
                        {player.attributes.jerseyNumber}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {player.attributes.name}
                </h3>
                <p className="text-muted-foreground mb-2">
                  #{player.attributes.jerseyNumber} • {player.attributes.position}
                </p>
                {player.attributes.nationality && (
                  <p className="text-sm text-muted-foreground">
                    {player.attributes.nationality}
                  </p>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-muted-foreground mb-4">
              No players added yet
            </h2>
            <p className="text-muted-foreground">
              Player information will be available soon.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}
