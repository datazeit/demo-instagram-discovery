docker run -p 6333:6333 -p 6334:6334 \
 -v $(pwd)/data/qdrant_storage:/qdrant/storage \
 -v $(pwd)/config/qdrant_config.yaml:/qdrant/config/production.yaml \
 qdrant/qdrant
