<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h1 class="my-4">{{ experience.title }}</h1>
          </v-card-title>
          <v-carousel v-if="experience.pictures && experience.pictures.length>0">
            <v-carousel-item
              v-for="picture in experience?.pictures" :key="picture.url"
              :src="picture.url"
              cover
            ></v-carousel-item>
          </v-carousel>
          <v-card-text>
            <v-alert>{{ experience.description }}</v-alert>
            <v-alert class="my-3">
              <p><strong>Duration:</strong> {{ experience.duration }}</p>
              <p><strong>Start at:</strong> {{ experience.start_at }}</p>
              <p><strong>End at:</strong> {{ experience.end_at }}</p>
              <p><strong>Max Participants:</strong> {{ experience.max_participants }}</p>
              <v-rating v-model="experience.rating" readonly></v-rating>
            </v-alert>
            <v-chip v-if="experience.flexible" class="float-end my-2">Flexible</v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h2 class="ma-4">Activities</h2>
          </v-card-title>
          <v-card-text>
            <div class=" d-flex">
              <div v-for="activity in experience.activities" :key="activity.id" class="ma-4">
                <v-chip label>{{ activity.name }}</v-chip>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h2 class="ma-4">Requirements</h2>
          </v-card-title>
          <v-card-text>
            <div class=" d-flex">
              <div v-for="requirement in experience.requirements" :key="requirement.id" class="ma-4">
                <v-chip label>{{ requirement.name }}</v-chip>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h2 class="ma-4">Notices</h2>
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="notice in experience.notices" :key="notice.id">
                <v-list-item prepend-icon="mdi-information">
                  <v-list-item-title> {{ notice.name }}</v-list-item-title>
                </v-list-item>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h2 class="ma-4">Take Into Account</h2>
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="item in experience.take_into_account" :key="item.id">
                <v-list-item prepend-icon="mdi-bell-alert-outline">
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title><h2 class="ma-4">Guide : {{ experience.guide?.name }}</h2></v-card-title>
          <v-card-text>
            <v-alert class="my-3">{{ experience.guide?.bio }}</v-alert>
          </v-card-text>

          <v-alert class="mx-4 mb-4">
            <v-card-text><strong>Expertise:</strong> {{ experience.guide?.expertise.join(', ') }}</v-card-text>
            <v-card-text><strong>Languages:</strong> {{ experience.guide?.languages.join(', ') }}</v-card-text>
            <v-card-text><strong>Contact:</strong> {{ experience.guide?.contact?.email }} /
              {{ experience.guide?.contact?.phone }}

            </v-card-text>
            <v-card-text><strong>Certification:</strong> {{ experience.guide?.certification }}</v-card-text>
            <v-card-text><strong>Years of Experience:</strong> {{ experience.guide?.years_experience }}</v-card-text>
          </v-alert>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title><h2 class="ma-4">Destination : {{ experience.destination?.label }}</h2></v-card-title>
          <v-card-text>
            <v-alert class="my-3">{{ experience.destination?.description }}
            </v-alert>
          </v-card-text>
          <v-card-text>
            <v-alert icon="mdi-map">
              <strong>Location:</strong> {{ experience.destination?.location?.address }},
              {{ experience.destination?.location?.city }}, {{ experience.destination?.location?.country }}
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title><h2>Steps</h2></v-card-title>
          <v-card-text>
            <v-timeline>
              <v-timeline-item v-for="step in experience.steps" :key="step.id">
                <v-card>
                  <v-card-title>{{ step.label }}</v-card-title>
                  <v-card-text>{{ step.description }}</v-card-text>
                  <v-card-text>
                    <v-chip><strong>Duration: </strong> {{ step.duration }}</v-chip>
                    <v-chip class="mx-4" label v-for="activity in step.activities" :key="activity.id">
                      {{ activity.name }}
                    </v-chip>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h2 class="ma-4">Pricing Details</h2>
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="pricing in experience.pricing_details" :key="pricing.id">
                <v-list-item prepend-icon="mdi-currency-usd" variant="tonal">
                  <v-list-item-title>
                    <v-alert class="my-2">
                      {{ pricing.description }}: {{ pricing.amount }} DHS
                    </v-alert>
                  </v-list-item-title>
                </v-list-item>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>

        <v-card>
          <v-card-title>
            <h2 class="ma-4">Meeting Point:
              <v-chip label prepend-icon="mdi-clock" class="float-end">{{ experience.meetingPoint?.time }}</v-chip>
            </h2>

          </v-card-title>
          <v-card-text>
            <v-alert>
              {{ experience.meetingPoint?.instructions }}
            </v-alert>
          </v-card-text>
          <v-card-text>
            <v-alert icon="mdi-map">
              <strong>Address:</strong> {{ experience.meetingPoint?.location?.address }}
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title><h2 class="ma-4">Cancellation Policy</h2></v-card-title>
          <v-card-text>
            <v-alert>
              <strong>Notice Period :</strong> {{ experience.cancellation_policy?.notice_period }}
            </v-alert>
          </v-card-text>
          <v-card-text>
            <v-alert>
              <strong>Refund Percentage :</strong> {{ experience.cancellation_policy?.refund_percentage }}%
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title><h2>User Reviews</h2></v-card-title>
          <v-card-text>
            <v-list v-for="review in experience.user_reviews" :key="review.userId">
              <v-list-item prepend-avatar="https://picsum.photos/800/600?random=12">
                <v-alert>
                  <v-list-item-title>{{ review.username }}</v-list-item-title>
                  <v-rating v-model="review.rating" readonly></v-rating>
                  <v-list-item-subtitle>{{ review.comment }}</v-list-item-subtitle>
                  <v-list-item-subtitle><em>{{ review.date }}</em></v-list-item-subtitle>
                </v-alert>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      experience: {
        // Paste the JSON object here
      },
    };
  },
  mounted() {
    this.getExperience();
  },
  methods: {
    async getExperience() {
      const experience = await import('@/static/experience.json');
      this.experience = experience;
      console.log(experience);
    }
  }
};
</script>

<style scoped>
</style>
